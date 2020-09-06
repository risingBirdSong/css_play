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
        borderTopLeftRadius: "1%",
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "1%",
        borderBottomLeftRadius: "1%",
        borderTop: `4px double ${colStr}`,
      }}
    ></div>
  );
};
export default Pedal;
