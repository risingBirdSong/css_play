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
        top: "50%",
        left: "50%",
        alignItems: "center",
      }}
    >
      {nums.map((num) => {
        return (
          <Pedal
            rgbColors={[255 % (255 - num * 2), 1, (255 % num) * 2]}
            rotateAmount={num}
            height={250 - num}
            width={100 - num}
            top={0}
            left={0}
          />
        );
      })}
    </div>
  );
};
export default Flower;
