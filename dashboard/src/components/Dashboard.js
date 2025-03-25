import React from "react";
import { Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { HoldingsProvider } from "./HoldingsContext";

const Dashboard = () => {
  console.log("Dashboard: Rendering at path:", window.location.pathname);
  return (
    <GeneralContextProvider>
      <HoldingsProvider>
        <div className="dashboard-container">
          <WatchList />
          <div className="content">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </div>
        </div>
      </HoldingsProvider>
    </GeneralContextProvider>
  );
};

export default Dashboard;
