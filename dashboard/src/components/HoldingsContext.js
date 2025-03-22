import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HoldingsContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

export function HoldingsProvider({ children }) {
  const [allHoldings, setAllHoldings] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    console.log("Holdings: Fetching from:", `${BACKEND_URL}/allHoldings`);
    axios
      .get(`${BACKEND_URL}/allHoldings`)
      .then((res) => {
        console.log("Holdings: Fetched:", res.data);
        setAllHoldings(res.data || []);
      })
      .catch((error) => {
        console.error("Holdings: Fetch error:", error.message);
        setAllHoldings([]);
      });
  }, [refreshTrigger]);

  const refreshHoldings = () => {
    console.log("Holdings: Triggering refresh");
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <HoldingsContext.Provider
      value={{
        allHoldings,
        setAllHoldings,
        refreshHoldings,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  );
}

export const useHoldings = () => {
  const context = useContext(HoldingsContext);
  if (context === undefined) {
    console.error("useHoldings must be used within a HoldingsProvider");
    return {
      allHoldings: [],
      setAllHoldings: () => {},
      refreshHoldings: () => {},
    }; // Fallback
  }
  return context;
};
