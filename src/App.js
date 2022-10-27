import React, { Components } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/404page";
import Home from "./components/Home";
// import Users from "./components/Users";
import Userz from "./components/Userz";
import "./style.css";

/*function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}*/

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/userz" element={<Userz />} />
      </Routes>

      {/* <ErrorBoundary FallBackComponent={your_errorComponent}>
        <Farewell />
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
