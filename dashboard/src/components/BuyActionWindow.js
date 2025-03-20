import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    const payload = {
      name: uid,
      qty: Number(stockQuantity), // Ensure numeric
      price: Number(stockPrice), // Ensure numeric
      mode: "BUY",
    };
    try {
      console.log("Sending buy request:", {
        url: `${BACKEND_URL}/newBuyOrder`,
        payload,
      });
      const response = await axios.post(`${BACKEND_URL}/newBuyOrder`, payload);
      console.log("Buy response:", response.data);
      closeBuyWindow();
    } catch (error) {
      console.error("Buy error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      alert(
        `Failed to buy stock: ${error.message}${
          error.response?.data?.message
            ? " - " + error.response.data.message
            : ""
        }`
      );
    }
  };

  const handleCancelClick = () => {
    console.log("Cancel clicked, closing buy window");
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
