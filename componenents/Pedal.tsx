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
      style={{
        // backgroundColor: colStr,
        padding: `${props.backAndForth}px`,
        // margin: "80px",
        overflow: "hidden",
        position: "absolute",
        border: "5px solid gold",
        height: `100px`,
        width: `${props.backAndForth}`,
        top: props.top,
        left: props.left,
        borderRadius: "90px/100px",
        // boxShadow: "10px 10px 10px purple",
        borderTop: `5px solid ${colStr}`,
        borderBottom: `5px solid  ${colStr}`,
        borderRight: `5px solid ${colStr}`,
        // borderBottom: `5px solid plum`,
        borderLeft: `5px solid  ${colStr}`,
        // borderRight: `5px solid  ${colStr}`,
        // borderLeft: `5px solid  ${colStr}`,
        // borderBottomLeftRadius: "10px",
        // borderBottomRightRadius: "10px",

        // transform: ``,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${props.rotateAmount}deg)`,
        //@ts-ignore
        // transform: `rotate(${props.rotateAmount}deg)`,
      }}
    ></div>
  );
};
export default Pedal;
