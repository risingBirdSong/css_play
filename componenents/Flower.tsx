import * as React from "react";
import Pedal from "./Pedal";
const Flower = () => {
  let nums = [...Array(10).keys()].slice(1);
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
            rotateAmount={num * 10}
            height={250}
            width={10}
            top={num * 10}
            left={num * 10}
          />
        );
      })}
    </div>
  );
};
export default Flower;
