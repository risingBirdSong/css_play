import * as React from "react";
export interface PedalProps {
  top: number;
  left: number;
  rotateAmount: number;
  height: number;
  width: number;
  rgbColors: [number, number, number] | number[];
  padding: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderRadius?: string;
  borderTop?: string;
  borderBottom?: string;
  marginTop?: string;
  transX: number;
  transY: number;
  boxShadow?: string;
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
        marginTop: props.marginTop,
        padding: props.padding,
        height: props.height,
        width: props.width,
        position: "absolute",
        top: props.top,
        left: props.left,
        transform: `translate(${props.transX}px, ${props.transY}px) rotate(${props.rotateAmount}deg)`,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderTopRightRadius: props.borderTopRightRadius,
        borderBottomRightRadius: props.borderBottomRightRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        borderTop: props.borderTop || `4px solid ${colStr}`,
        borderBottom: props.borderBottom,
        boxShadow: props.boxShadow ? `${props.boxShadow} ${colStr}` : "",

        // borderRadius: props.borderRadius,
        //  borderTopLeftRadius: "1%",
        // borderTopRightRadius: "100%",
        // borderBottomRightRadius: "1%",
        // borderBottomLeftRadius: "1%",
      }}
    ></div>
  );
};
export default Pedal;
