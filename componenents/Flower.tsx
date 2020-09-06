import * as React from "react";
import { useState, useEffect } from "react";
import Pedal from "./Pedal";
const Flower = () => {
  const [n, setN] = useState(50);
  console.log("n", n);
  const [backAndForth, setbackAndForth] = useState(1);
  console.log("back and forth", backAndForth);

  const [rising, setRising] = useState(true);
  let [nums, setNums] = useState([...Array(n).keys()].slice(n - 99));
  const [restart, setRestart] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setN((preV) => preV + 1);
      if (backAndForth >= 50) {
        setRising((prev) => !prev);
      } else if (backAndForth <= 0) {
        setRising((prev) => !prev);
      }
      if (rising) {
        setbackAndForth((prev) => ++prev);
      } else if (!rising) {
        setbackAndForth((prev) => --prev);
      }
      setNums([...Array(n).keys()].map((num) => num + n).slice(n - 99));
    }, 40);
    // clearing interval
    return () => clearInterval(timer);
  }, []);

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
            height={200 + backAndForth * 2}
            width={300 + backAndForth}
            top={1}
            left={1}
          />
        );
      })}
    </div>
  );
};
export default Flower;
