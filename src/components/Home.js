import React from "react";
import "../style.css";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <section className="home-container">
      <h1>Home Page</h1>
      <Navigation />
      <p>This is the Home Page</p>
    </section>
  );
}
