import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContext";
import { GeneralContextProvider } from "./components/GeneralContext";
import { HoldingsProvider } from "./components/HoldingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GeneralContextProvider>
          <HoldingsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/holdings" element={<Home />} />
              <Route path="/orders" element={<Home />} />
              <Route path="/positions" element={<Home />} />
              <Route path="/funds" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </HoldingsProvider>
        </GeneralContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
