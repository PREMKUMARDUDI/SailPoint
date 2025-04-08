import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const HoldingsContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

export function HoldingsProvider({ children }) {
  const [allHoldings, setAllHoldings] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchHoldings = async () => {
    console.log("Holdings: Fetching from:", `${BACKEND_URL}/allHoldings`);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKEND_URL}/allHoldings`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      console.log("Holdings: Fetched:", response.data);
      setAllHoldings(response.data || []);
      setRefreshKey((prev) => prev + 1); // Increment to force re-render
    } catch (error) {
      console.error("Holdings: Fetch error:", error.message);
      setAllHoldings([]);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  const refreshHoldings = async () => {
    console.log("Holdings: Triggering refresh");
    await fetchHoldings();
  };

  const value = React.useMemo(
    () => ({ allHoldings, refreshHoldings, refreshKey }),
    [allHoldings, refreshKey]
  );

  return (
    <HoldingsContext.Provider value={value}>
      {children}
    </HoldingsContext.Provider>
  );
}

export const useHoldings = () => {
  const context = useContext(HoldingsContext);
  if (context === undefined) {
    console.error("useHoldings must be used within a HoldingsProvider");
    return { allHoldings: [], refreshHoldings: () => {}, refreshKey: 0 };
  }
  return context;
};
