import * as React from "react";
import Pedal from "./Pedal";
const Flower = () => {
  let nums = [...Array(100).keys()].slice(1);
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
            rgbColors={[(255 % (num * 2)) + 50, 1, (255 % (num * 2)) + 150]}
            rotateAmount={num * 3}
            height={400}
            width={50}
            top={num * 3}
            left={num * 3}
          />
        );
      })}
    </div>
  );
};
export default Flower;
