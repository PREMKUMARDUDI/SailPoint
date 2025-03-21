require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const { UsersModel } = require("./model/UsersModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const port = process.env.PORT || 3002;
const mongoUrl = process.env.MONGO_URL;

// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

app.use(
  cors({
    origin: [
      "https://sailpoint-frontend.onrender.com",
      "https://sailpoint-dashboard.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

// MongoDB Connection
const connectDB = async () => {
  const maxRetries = 10;
  let retries = 0;

  const attemptConnection = async () => {
    try {
      if (mongoose.connection.readyState === 1) {
        console.log("DB already connected, skipping attempt");
        return; // Skip if already connected
      }
      await mongoose.connect(mongoUrl, {
        serverSelectionTimeoutMS: 60000,
        connectTimeoutMS: 60000,
        socketTimeoutMS: 90000,
      });
      console.log("DB started");
      await UsersModel.createIndexes({ email: 1 });
    } catch (error) {
      console.error("DB connection error:", error.message);
      if (retries < maxRetries) {
        retries++;
        console.log(`Retrying connection (${retries}/${maxRetries})...`);
        setTimeout(attemptConnection, 5000);
      } else {
        console.error("Max retries reached. DB connection failed.");
      }
    }
  };

  attemptConnection();
};

// Mongoose event listeners
mongoose.connection.on("connected", () => console.log("DB connected"));
mongoose.connection.on("error", (err) =>
  console.error("DB issue:", err.message)
);
mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
  connectDB(); // Reconnect on disconnect
});

// Routes
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error in /allHoldings:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error in /allPositions:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error("Error in /allOrders:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

app.post("/newBuyOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: Number(req.body.price).toFixed(2),
      mode: req.body.mode,
    });
    await newOrder.save();

    let change = (Math.random() * 5).toFixed(2);
    let newHolding = new HoldingsModel({
      name: req.body.name,
      qty: req.body.qty,
      avg: Number(req.body.price).toFixed(2),
      price: Number(req.body.price * (1 + change / 100)).toFixed(2),
      net: `+${change}%`,
      day: `+${change}%`,
    });
    await newHolding.save();

    res.send("Order saved!");
  } catch (error) {
    console.error("Error in /newBuyOrder:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

app.post("/newSellOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: Number(req.body.price).toFixed(2),
      mode: req.body.mode,
    });
    await newOrder.save();

    let holding = await HoldingsModel.findOne({
      name: req.body.name,
      price: req.body.price,
    });
    if (holding) {
      holding.qty -= req.body.qty;
      if (holding.qty <= 0) {
        await HoldingsModel.deleteOne({ name: req.body.name });
      } else {
        await holding.save();
      }
    } else {
      throw new Error("No holding found to sell");
    }

    res.send("Order saved!");
  } catch (error) {
    console.error("Error in /newSellOrder:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

app.delete("/deleteAllOrders", async (req, res) => {
  try {
    await OrdersModel.deleteMany({});
    res.send("Cleared!");
  } catch (error) {
    console.error("Error in /deleteAllOrders:", error.message);
    res.status(500).json({ message: "Database error, please try again later" });
  }
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`App started on port ${port}`);
  });
});
