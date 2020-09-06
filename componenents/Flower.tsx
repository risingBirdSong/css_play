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
            rgbColors={[num * 1.3 + 50, 1, (255 % (num * 2)) + 150]}
            rotateAmount={num * 6}
            height={400 + num}
            width={50 + num * 2}
            top={num * 3}
            left={num * 3}
          />
        );
      })}
    </div>
  );
};
export default Flower;
