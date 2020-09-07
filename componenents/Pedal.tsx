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
        // padding: `10px`,
        // margin: "80px",
        // overflow: "hidden",
        position: "absolute",
        height: `${props.backAndForth}`,
        width: `100px`,
        top: props.top,
        left: props.left,
        // borderRadius: "20px",
        // boxShadow: "2px 2px 2px 2px gold",
        borderTop: `${props.idx}px dotted ${colStr}`,
        // borderRight: `${props.idx * 5}px solid  ${colStr}`,
        // borderBottom: `4px solid  ${colStr}`,
        // borderLeft: `4px solid   ${colStr}`,
        // borderBottom: `50px solid plum`,
        // borderRight: `5px solid  ${colStr}`,
        // borderLeft: `5px solid  ${colStr}`,
        // borderBottomLeftRadius: "10px",
        // borderBottomRightRadius: "10px",

        // transform: ``,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${
          props.rotateAmount + 90 + props.backAndForth
        }deg) scale(${(props.idx + 1) / 15})`,
        //@ts-ignore
        // transform: `rotate(${props.rotateAmount}deg)`,
      }}
    ></div>
  );
};
export default Pedal;
