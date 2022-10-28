import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/404page";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import Users from "./components/Users";
import "./style.css";

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Users/:id" element={<Users />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
