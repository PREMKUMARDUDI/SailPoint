import React, { useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import { useHoldings } from "./HoldingsContext";
import { useLocation } from "react-router-dom";

const Holdings = () => {
  const { allHoldings, refreshKey, refreshHoldings } = useHoldings();
  const location = useLocation();

  const data = {
    labels: allHoldings.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // Re-fetch holdings when navigating to /holdings
  useEffect(() => {
    if (location.pathname === "/holdings") {
      console.log("Holdings: Navigating to /holdings, triggering refresh");
      refreshHoldings();
    }
  }, [location.pathname, refreshHoldings]);

  useEffect(() => {
    console.log(
      "Holdings: Rendered with refreshKey:",
      refreshKey,
      "allHoldings:",
      allHoldings
    );
  }, [refreshKey, allHoldings]); // Depend on both to ensure re-render

  console.log("Holdings: Rendering UI with allHoldings:", allHoldings);
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
