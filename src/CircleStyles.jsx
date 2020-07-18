import React from "react";

export const styles = {
  outer: {
    backgroundColor: "blue",
    width: "400px",
    height: "400px",
    position: "relative",
    border: "1px solid black",
    borderRadius: "50%",
    margin: "auto",
  },
  inner1: {
    backgroundColor: "lime",
    top: "10%",
    left: "10%",
    width: "80%",
    height: "80%",
    position: "absolute",
    border: "1px solid black",
    borderRadius: "50%",
  },
  inner2: {
    backgroundColor: "yellow",
    top: "20%",
    left: "20%",
    width: "60%",
    height: "60%",
    position: "absolute",
    border: "1px solid black",
    borderRadius: "50%",
  },
};

export const styleContext = React.createContext(null);

export default { styleContext, styles };
