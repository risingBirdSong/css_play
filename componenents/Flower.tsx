import * as React from "react";
import { useState, useEffect } from "react";
import Pedal from "./Pedal";
const Flower = () => {
  const [n, setN] = useState(20);
  const [backAndForth, setbackAndForth] = useState(1);
  const [delay, setDelay] = useState(1);
  const [clearTimer, setClearTimer] = useState(false);
  const [rising, setRising] = useState(true);

  let [nums, setNums] = useState([...Array(n).keys()]);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const timing = setTimeout(() => {
      setN((prev) => ++prev);
      if (n % 300 === 0) {
        setRising((prv) => !prv);
      }
      if (rising) {
        setbackAndForth((prv) => ++prv);
      }
      if (!rising) {
        setbackAndForth((prv) => --prv);
      }
      if (n % 10 === 0) {
        let stop = true;
      }
      if (n > 2000) {
        setClearTimer(true);
      }
    }, delay);
    if (clearTimer) {
      return clearTimeout(timing);
    }
  }, [n]);

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
            transY={radians_to_degrees(Math.sin(num) * 2)}
            rgbColors={[(n / 2) % 255, 50, (n * 2) % 255]}
            rotateAmount={radians_to_degrees(Math.cos(num))}
            height={100 + backAndForth}
            width={100 + backAndForth}
            top={1}
            left={1}
          />
        );
      })}
    </div>
  );
};
export default Flower;
