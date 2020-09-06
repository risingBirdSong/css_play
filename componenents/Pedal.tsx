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
        position: "absolute",
        border: "5px solid gold",
        height: props.backAndForth,
        width: props.backAndForth,
        top: props.top,
        left: props.left,
        borderRadius: "100%",
        borderTop: `10px solid blue`,
        // borderRight: `50px solid transparent`,
        // borderBottom: `50px solid transparent`,
        // borderBottom: `50px solid purple`,

        // transform: ``,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${props.rotateAmount}deg)`,
        //@ts-ignore
        // transform: `rotate(${props.rotateAmount}deg)`,
      }}
    ></div>
  );
};
export default Pedal;
