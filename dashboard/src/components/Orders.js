import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      {allOrders.length !== 0 && (
        <button
          onClick={() => axios.delete("http://localhost:3002/deleteAllOrders")}
          style={{ margin: "5px", padding: "5px" }}
        >
          Clear all
        </button>
      )}
      {allOrders.length === 0 && (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}

      {allOrders.length !== 0 && (
        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Total Cost</th>
              <th>Mode</th>
            </tr>

            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{(stock.qty * stock.price.toFixed(2)).toFixed(2)}</td>
                  <td
                    style={{ color: stock.mode === "BUY" ? "blue" : "orange" }}
                  >
                    {stock.mode}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
