import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HoldingsContext = createContext();

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

export function HoldingsProvider({ children }) {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((error) =>
        console.error("Error fetching holdings:", error.message)
      );
  }, []);

  return (
    <HoldingsContext.Provider value={{ allHoldings, setAllHoldings }}>
      {children}
    </HoldingsContext.Provider>
  );
}

export const useHoldings = () => useContext(HoldingsContext);
