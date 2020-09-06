import * as React from "react";
import { useState } from "react";
import Pedal from "./Pedal";
const Flower = () => {
  const [n, setN] = useState(100);
  console.log("n", n);

  let [nums, setNums] = useState([...Array(n).keys()].slice(n - 99));
  setTimeout(() => {
    setN((preV) => preV + 1);
    setNums([...Array(n).keys()].map((num) => num + n).slice(n - 99));
  }, 20);
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
        function radians_to_degrees(radians: number) {
          var pi = Math.PI;
          return radians * (180 / pi);
        }
        return (
          <Pedal
            transX={radians_to_degrees(Math.cos(num)) * 2}
            transY={radians_to_degrees(Math.sin(num) * 3)}
            rgbColors={[(num / 2) % 255, 50, (num * 2) % 255]}
            rotateAmount={radians_to_degrees(Math.cos(num)) * 2 + n}
            height={100}
            width={300 % n}
            top={1}
            left={1}
          />
        );
      })}
    </div>
  );
};
export default Flower;
