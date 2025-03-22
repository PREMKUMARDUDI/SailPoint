import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useHoldings } from "./HoldingsContext";
import "./BuyActionWindow.css";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeSellWindow } = useContext(GeneralContext);
  const { refreshHoldings } = useHoldings();

  const handleSellClick = async () => {
    const token = localStorage.getItem("token");
    const payload = {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "Sell",
    };
    try {
      console.log("Sell: Sending request:", {
        url: `${BACKEND_URL}/newSellOrder`,
        payload,
      });
      const response = await axios.post(
        `${BACKEND_URL}/newSellOrder`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Sell: Response:", response.data);
      refreshHoldings();
      closeSellWindow();
    } catch (error) {
      console.error("Sell: Error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      alert(
        `Failed to sell: ${error.message}${
          error.response?.data?.message
            ? " - " + error.response.data.message
            : ""
        }`
      );
    }
  };

  const handleCancelClick = () => {
    console.log("Sell: Cancel clicked");
    closeSellWindow();
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
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
