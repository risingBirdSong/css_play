import * as React from "react";
export interface PedalProps {
  top: number;
  left: number;
  rotateAmount: number;
  backAndForth: number;
  rgbColors: [number, number, number];
  transX: number;
  transY: number;
  idx: number;
}
const Pedal = (props: PedalProps) => {
  let clrs = props.rgbColors;
  let colStr = `rgb(${clrs[0]},${clrs[1]},${clrs[2]})`;

  return (
    <div
      // className={`idx${props.idx}`}
      style={{
        // backgroundColor: `rgb(100, 1, 10)`,
        // padding: "100px",
        // margin: "80px",
        // overflow: "hidden",
        position: "absolute",
        border: "5px solid gold",
        height: "0px",
        width: "0px",
        top: props.top,
        left: props.left,
        // borderRadius: "100%",
        borderTop: `50px solid ${colStr}`,
        borderRight: `50px solid transparent`,
        borderBottom: `50px solid transparent`,
        borderLeft: `50px solid transparent`,

        // transform: ``,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${props.rotateAmount}deg)`,
        //@ts-ignore
        // transform: `rotate(${props.rotateAmount}deg)`,
      }}
    ></div>
  );
};
export default Pedal;
