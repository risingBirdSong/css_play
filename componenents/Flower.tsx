import * as React from "react";
import { useState, useEffect } from "react";
import Pedal from "./Pedal";
import { Box, Button, Container } from "@material-ui/core";
let staticMapping: [string, number][] = [
  ["spiral", 0],
  ["shell", 1],
  ["shell with shadow", 2],
  ["arcWreath", 3],
];

let animMapping: [string, number][] = [["anim test", 0]];
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
  boxShadow?: string;
}
function radians_to_degrees(radians: number) {
  var pi = Math.PI;
  return radians * (180 / pi);
}
const Flower = () => {
  const [n, setN] = useState(100);
  let [nums, setNums] = useState([...Array(n).keys()].slice(n - 99));

  const [staticOptionsNum, setStaticOptionsNum] = useState(0);

  const Nav = () => {
    return (
      <div>
        <Container
          component="div"
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "100px",
          }}
        >
          {staticMapping.map((tuple) => (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "2px" }}
              onClick={() => {
                setStaticOptionsNum(tuple[1]);
              }}
            >
              {" "}
              {tuple[0]}{" "}
            </Button>
          ))}
        </Container>
      </div>
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
          let staticOptionArray: optionsI[] = [
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
              boxShadow: "1px 1px 10px",
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
              boxShadow: "1px 1px 10px",
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
                transX={staticOptionArray[staticOptionsNum].transX}
                transY={staticOptionArray[staticOptionsNum].transY}
                marginTop={staticOptionArray[staticOptionsNum].marginTop}
                borderBottomLeftRadius={
                  staticOptionArray[staticOptionsNum].borderBottomLeftRadius
                }
                borderBottomRightRadius={
                  staticOptionArray[staticOptionsNum].borderBottomRightRadius
                }
                borderTopLeftRadius={
                  staticOptionArray[staticOptionsNum].borderTopLeftRadius
                }
                borderTopRightRadius={
                  staticOptionArray[staticOptionsNum].borderTopRightRadius
                }
                padding={staticOptionArray[staticOptionsNum].padding}
                rgbColors={staticOptionArray[staticOptionsNum].colors}
                rotateAmount={staticOptionArray[staticOptionsNum].rotateAmount}
                height={staticOptionArray[staticOptionsNum].height}
                width={staticOptionArray[staticOptionsNum].width}
                top={staticOptionArray[staticOptionsNum].top}
                left={staticOptionArray[staticOptionsNum].left}
                borderRadius={staticOptionArray[staticOptionsNum].borderRadius}
                boxShadow={staticOptionArray[staticOptionsNum].boxShadow}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Flower;
