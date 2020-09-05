import * as React from "react";

const Pedal = () => {
  return (
    <div
      className="pedal"
      style={{
        backgroundColor: "blue",
        padding: "15px",
        height: "80px",
        width: "30px",
        position: "absolute",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "100%",
        borderBottomLeftRadius: "100%",
        transform: "scaleY(5)",
      }}
    ></div>
  );
};
export default Pedal;
