import * as React from "react";
export interface PedalProps {
  top: number;
  left: number;
  rotateAmount: number;
  height: number;
  width: number;
  rgbColors: [number, number, number];
  transX: number;
  transY: number;
}
const Pedal = (props: PedalProps) => {
  let clrs = props.rgbColors;
  let colStr = `rgb(${clrs[0]},${clrs[1]},${clrs[2]})`;

  return (
    <div
      className="pedal"
      style={{
        // backgroundColor: `rgb(100, 1, 10)`,
        // backgroundColor: colStr,
        padding: "15px",
        height: props.height,
        width: props.width,
        position: "absolute",
        top: props.top,
        left: props.left,
        borderRadius: "100%",
        // borderTop: `5px dotted ${colStr}`,
        // borderBottom: "5px dotted cornflowerblue",
        // borderLeft: "5px dotted blueviolet",
        // borderRight: "5px solid blueviolet",
        boxShadow: `1px 1px 10px  ${colStr}`,
        // transform: ``,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${props.rotateAmount}deg)`,
        //@ts-ignore
        // transform: `rotate(${props.rotateAmount}deg)`,
      }}
    ></div>
  );
};
export default Pedal;
