import React from "react";
import OuterCircle from "./OuterCircle";
import { styleContext, styles } from "./CircleStyles";
import "./App.css";

function App() {
  return (
    <styleContext.Provider value={styles}>
      <OuterCircle />
    </styleContext.Provider>
  );
}
export default App;
