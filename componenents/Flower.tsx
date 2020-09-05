import * as React from "react";
import Pedal from "./Pedal";
const Flower = () => {
  return (
    <div
      className="flower"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        alignItems: "center",
      }}
    >
      <Pedal />
    </div>
  );
};
export default Flower;
