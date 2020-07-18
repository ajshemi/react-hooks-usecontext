import React, { useContext } from "react";
import { styleContext } from "./CircleStyles";

function InnerCircle1() {
  const astyle = useContext(styleContext);
  return <div style={astyle.inner1}></div>;
}

export default InnerCircle1;
