import React from "react";

const Circles = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "400px",
        height: "400px",
        position: "relative",
        border: "1px solid black",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          backgroundColor: "lime",
          top: "10%",
          left: "10%",
          width: "80%",
          height: "80%",
          position: "absolute",
          border: "1px solid black",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "yellow",
          top: "20%",
          left: "20%",
          width: "60%",
          height: "60%",
          position: "absolute",
          border: "1px solid black",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Circles;
