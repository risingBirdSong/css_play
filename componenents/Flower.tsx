import * as React from "react";
import { useState } from "react";
import Pedal from "./Pedal";
import { Box, Button, Container } from "@material-ui/core";
let buttonMapping: [string, number][] = [
  ["spiral", 0],
  ["shell", 1],
  ["spiral 2", 2],
  ["arcWreath", 3],
  ["anim shape", 4],
];
interface optionsI {
  colors: number[];
  rotateAmount: number;
  height: number;
  width: number;
  top: number;
  left: number;
  padding: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderRadius?: string;
  borderTop?: string;
  borderBottom?: string;
  marginTop: string;
  transX: number;
  transY: number;
}
function radians_to_degrees(radians: number) {
  var pi = Math.PI;
  return radians * (180 / pi);
}
const Flower = () => {
  const [n, setN] = useState(100);
  let [nums, setNums] = useState([...Array(n).keys()].slice(n - 99));
  const [anim, setAnim] = useState(false);
  setTimeout(() => {
    if (anim) {
      setN((preV) => preV + 1);
      setNums([...Array(n).keys()].map((num) => num + n).slice(n - 99));
    }
  }, 1);
  const [optionsNum, setoptionsNum] = useState(0);
  const Nav = () => {
    return (
      <Container
        component="div"
        style={{ border: "1px solid black", padding: "10px", margin: "100px" }}
      >
        {buttonMapping.map((tuple) => (
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "2px" }}
            onClick={() => {
              if (tuple[0].includes("anim")) {
                setAnim(true);
              } else {
                setAnim(false);
              }
              setoptionsNum(tuple[1]);
            }}
          >
            {" "}
            {tuple[0]}{" "}
          </Button>
        ))}
      </Container>
    );
  };
  return (
    <div>
      <Nav />

      <div
        className="flower"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          flexDirection: "column",
          top: "30%",
          left: "30%",
          alignItems: "center",
        }}
      >
        {nums.map((num) => {
          let optionArray: optionsI[] = [
            {
              colors: [((num * 2) % 255) + 50, 1, (num + 150) % 255],
              rotateAmount: num * 10,
              height: 200,
              width: 100,
              top: num * 3,
              left: num * 3,
              padding: "0px",
              borderTopLeftRadius: "5%",
              borderTopRightRadius: "80%",
              borderBottomRightRadius: "100%",
              borderBottomLeftRadius: "100%",
              marginTop: "0px",
              transX: 0,
              transY: 0,
            },
            {
              colors: [((num * 2) % 255) + 50, 1, (num + 150) % 255],
              rotateAmount: num * 3,
              height: 400,
              width: 100,
              top: num * 3,
              left: num * 3,
              padding: "0px",
              borderTopLeftRadius: "5%",
              borderTopRightRadius: "80%",
              borderBottomRightRadius: "100%",
              borderBottomLeftRadius: "100%",
              marginTop: "-30px",
              transX: 0,
              transY: 0,
            },
            {
              colors: [((num * 2) % 255) + 50, 1, (num + 150) % 255],
              rotateAmount: num * 3,
              height: 400 + num,
              width: 50 + num * 2,
              top: num * 3,
              left: num * 3,
              padding: "0px",
              borderTopLeftRadius: "1%",
              borderTopRightRadius: "100%",
              borderBottomRightRadius: "1%",
              borderBottomLeftRadius: "1%",
              marginTop: "-70px",
              transX: 0,
              transY: 0,
            },
            {
              colors: [num * 1.3 + 50, 1, (255 % (num * 2)) + 150],
              rotateAmount: radians_to_degrees(Math.cos(num)) * 3,
              height: 100,
              width: 50,
              top: 1,
              left: 1,
              padding: "15px",
              borderRadius: "100px",
              marginTop: "100px",
              borderBottomLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              borderTopLeftRadius: "100px",
              borderTopRightRadius: "100px",
              transX: radians_to_degrees(Math.cos(num)) * 3,
              transY: radians_to_degrees(Math.sin(num)) * 3,
            },
            {
              colors: [num * 1.3 + 50, 1, (255 % (num * 2)) + 150],
              rotateAmount: radians_to_degrees(Math.cos(num)) * 2 + n,
              height: 100,
              width: 50,
              top: 1,
              left: 1,
              padding: "15px",
              marginTop: "100px",
              borderBottomLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              borderTopLeftRadius: "100px",
              borderTopRightRadius: "100px",
              transX: radians_to_degrees(Math.cos(num)) * 2,
              transY: radians_to_degrees(Math.sin(num)) * 2,
            },
          ];
          return (
            <div>
              <Pedal
                transX={optionArray[optionsNum].transX}
                transY={optionArray[optionsNum].transY}
                marginTop={optionArray[optionsNum].marginTop}
                borderBottomLeftRadius={
                  optionArray[optionsNum].borderBottomLeftRadius
                }
                borderBottomRightRadius={
                  optionArray[optionsNum].borderBottomRightRadius
                }
                borderTopLeftRadius={
                  optionArray[optionsNum].borderTopLeftRadius
                }
                borderTopRightRadius={
                  optionArray[optionsNum].borderTopRightRadius
                }
                padding={optionArray[optionsNum].padding}
                rgbColors={optionArray[optionsNum].colors}
                rotateAmount={optionArray[optionsNum].rotateAmount}
                height={optionArray[optionsNum].height}
                width={optionArray[optionsNum].width}
                top={optionArray[optionsNum].top}
                left={optionArray[optionsNum].left}
                borderRadius={optionArray[optionsNum].borderRadius}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Flower;
