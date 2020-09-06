import * as React from "react";
import Pedal from "./Pedal";
const Flower = () => {
  let nums = [...Array(13).keys()].slice(1);
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
      {nums.map((num) => {
        return (
          <Pedal
            rotateAmount={num * 30}
            height={250}
            width={50}
            top={0}
            left={0}
          />
        );
      })}
    </div>
  );
};
export default Flower;
