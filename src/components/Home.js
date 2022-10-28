import React from "react";
import "../style.css";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <section className="home-container">
      <Navigation />
      <div className="Search">
        <h2>You are inside the Home Component</h2>
        <h4>URL: localhost:3000/</h4>
      </div>
    </section>
  );
}
