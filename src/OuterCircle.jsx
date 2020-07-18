import React, { useContext } from "react";
import InnerCircle1 from "./InnerCircle1";
import InnerCircle2 from "./InnerCircle2";
import { styleContext } from "./CircleStyles";

function OuterCircle() {
  const astyle = useContext(styleContext);
  return (
    <div style={astyle.outer}>
      <InnerCircle1 />
      <InnerCircle2 />
    </div>
  );
}

export default OuterCircle;
