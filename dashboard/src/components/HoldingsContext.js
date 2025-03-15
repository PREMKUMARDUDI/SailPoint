import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HoldingsContext = createContext();

export function HoldingsProvider({ children }) {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
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
