import * as React from "react";
import { useState, useEffect } from "react";
import Pedal from "./Pedal";
const Flower = () => {
  const [n, setN] = useState(90);
  const [backAndForth, setbackAndForth] = useState(5);
  const [delay, setDelay] = useState(0.1);
  const [clearTimer, setClearTimer] = useState(false);
  const [rising, setRising] = useState(true);

  let [nums, setNums] = useState([...Array(n).keys()]);
  const [restart, setRestart] = useState(false);

  function radians_to_degrees(radians: number) {
    var pi = Math.PI;
    return radians * (180 / pi);
  }

  //https://stackoverflow.com/questions/15994194/how-to-convert-x-y-coordinates-to-an-angle
  function coordsToAngle(x1: number, x2: number, y1: number, y2: number) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    return Math.atan2(deltaY, deltaX);
  }

  useEffect(() => {
    const timing = setTimeout(() => {
      setN((prev) => ++prev);
      if (backAndForth >= 100) {
        setRising(false);
      }
      if (backAndForth <= 5) {
        setRising(true);
      }
      if (rising) {
        setbackAndForth((prv) => (prv += 1));
      }
      if (!rising) {
        setbackAndForth((prv) => (prv -= 1));
      }
      if (n % 10 === 0) {
        let stop = true;
      }
      if (n > 6000) {
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
      {nums.map((num, idx) => {
        function radians_to_degrees(radians: number) {
          var pi = Math.PI;
          return radians * (180 / pi);
        }
        return (
          <div>
            <Pedal
              idx={backAndForth}
              transX={radians_to_degrees(Math.sin(num)) * 5}
              transY={radians_to_degrees(Math.cos(num)) * 5}
              rgbColors={[backAndForth, 10, backAndForth / 2 + 100]}
              // rotateAmount={180}
              rotateAmount={radians_to_degrees(
                coordsToAngle(
                  0,
                  radians_to_degrees(Math.sin(num)) * 5,
                  0,
                  radians_to_degrees(Math.cos(num)) * 5
                )
              )}
              // rotateAmount={radians_to_degrees(Math.sin(n))}
              backAndForth={backAndForth}
              top={0}
              left={0}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Flower;
