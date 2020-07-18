import React, { useContext } from "react";
import { styleContext } from "./CircleStyles";

function InnerCircle2() {
  const astyle = useContext(styleContext);
  return <div style={astyle.inner2}></div>;
}

export default InnerCircle2;
