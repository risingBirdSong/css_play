import * as React from "react";
import { useState } from "react";
import Pedal from "./Pedal";
import { Box, Button, Container } from "@material-ui/core";
const Flower = () => {
  let nums = [...Array(100).keys()].slice(1);
  const [optionsNum, setoptionsNum] = useState(0);
  const Nav = () => {
    return (
      <Container
        component="div"
        style={{ border: "1px solid black", padding: "10px", margin: "100px" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setoptionsNum(0);
          }}
        >
          spiral
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setoptionsNum(1);
          }}
        >
          test
        </Button>
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
          left: "50%",
          alignItems: "center",
        }}
      >
        {nums.map((num) => {
          let optionArray = [
            {
              colors: [((num * 2) % 255) + 50, 1, (num * 2 + 150) % 255],
              rotateAmount: num * 10,
              height: 200,
              width: 100,
              top: num * 3,
              left: num * 3,
            },
            {
              colors: [0, 255, 0],
              rotateAmount: num * 100,
              height: 300,
              width: 200,
              top: num * 5,
              left: num * 5,
            },
          ];
          return (
            <Pedal
              rgbColors={optionArray[optionsNum].colors}
              rotateAmount={optionArray[optionsNum].rotateAmount}
              height={optionArray[optionsNum].height}
              width={optionArray[optionsNum].width}
              top={optionArray[optionsNum].top}
              left={optionArray[optionsNum].left}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Flower;
