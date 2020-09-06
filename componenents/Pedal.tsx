import * as React from "react";
interface PedalProps {
  top: number;
  left: number;
  rotateAmount: number;
  height: number;
  width: number;
}
const Pedal = (props: PedalProps) => {
  return (
    <div
      className="pedal"
      style={{
        // backgroundColor: "blue",
        padding: "15px",
        height: props.height,
        width: props.width,
        position: "absolute",
        top: props.top,
        left: props.left,
        transform: `rotate(${props.rotateAmount}deg)`,
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "90%",
        borderBottomLeftRadius: "90%",
        border: "1px solid black",
      }}
    ></div>
  );
};
export default Pedal;
