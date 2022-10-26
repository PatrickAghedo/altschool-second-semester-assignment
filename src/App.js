import React, { Components } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from './components/Home';
import Users from './components/Users';

import "./style.css";

// function Home() {
//   return (
//     <section className="home-container">
//       <h1>Home Page</h1>
//       <p>This is the Home Page</p>
//       <Navigation />
//     </section>
//   );
// }

// function Users() {
//   return (
//     <section className="users-container">
//       <h1>Users</h1>
//       <p>This is the Users Page</p>
//       <Navigation />
//     </section>
//   );
// }

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
