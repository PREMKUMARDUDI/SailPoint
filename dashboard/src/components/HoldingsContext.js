import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HoldingsContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

export function HoldingsProvider({ children }) {
  const [allHoldings, setAllHoldings] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0); // Added for refresh

  useEffect(() => {
    console.log("Fetching holdings from:", `${BACKEND_URL}/allHoldings`);
    axios
      .get(`${BACKEND_URL}/allHoldings`)
      .then((res) => {
        console.log("Holdings fetched:", res.data);
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error.message);
      });
  }, [refreshTrigger]); // Trigger fetch on refresh

  const refreshHoldings = () => {
    console.log("Triggering holdings refresh");
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <HoldingsContext.Provider
      value={{ allHoldings, setAllHoldings, refreshHoldings }}
    >
      {children}
    </HoldingsContext.Provider>
  );
}

export const useHoldings = () => useContext(HoldingsContext);
