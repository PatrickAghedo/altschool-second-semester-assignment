import React, { Components } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/404page";
import ErrorBoundary from "./components/ErrorBoundary";
import FetchAPI from "./components/FetchAPI";
import Home from "./components/Home";
import Users from "./components/Users";
import "./style.css";

function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users" element={<FetchAPI />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
