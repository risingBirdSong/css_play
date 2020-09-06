import * as React from "react";
import Pedal from "./Pedal";
const Flower = () => {
  let nums = [...Array(20).keys()].slice(1);
  return (
    <div
      className="flower"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        flexDirection: "column",
        top: "30%",
        left: "50%",
        alignItems: "center",
      }}
    >
      {nums.map((num) => {
        return (
          <Pedal
            rgbColors={[(255 % num) * 9, 1, 130]}
            rotateAmount={num * 2}
            height={250 - num}
            width={10}
            top={0}
            left={0}
          />
        );
      })}
    </div>
  );
};
export default Flower;
