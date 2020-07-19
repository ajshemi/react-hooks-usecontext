import React from "react";
import OuterCircle from "./OuterCircle";
import { styleContext, styles } from "./CircleStyles";
import "./App.css";

function App() {
  return (
    <styleContext.Provider value={styles}>
      <h1 style={{ textAlign: "center" }}>Draw Three Concentric Circles</h1>
      <OuterCircle />
    </styleContext.Provider>
  );
}
export default App;
