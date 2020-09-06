import * as React from "react";
export interface PedalProps {
  top: number;
  left: number;
  rotateAmount: number;
  height: number;
  width: number;
  rgbColors: [number, number, number];
}
const Pedal = (props: PedalProps) => {
  let clrs = props.rgbColors;
  let colStr = `rgb(${clrs[0]},${clrs[1]},${clrs[2]})`;
  console.log("clrs strs", colStr);

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
        transform: `rotate(${props.rotateAmount}deg)`,
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "100%",
        borderBottomLeftRadius: "100%",
        borderBottom: "100px solid transparent",
        borderTop: `50px groove ${colStr}`,
        borderLeft: `3px dotted purple`,
        borderRight: `5px solid ${colStr}`,
      }}
    ></div>
  );
};
export default Pedal;
