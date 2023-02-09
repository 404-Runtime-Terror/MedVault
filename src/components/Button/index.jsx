import React from "react";

const Button = (props) => {
  return (
    <button
      className={"button"}
      style={{
        position: "relative",
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        color: props.color,
        zIndex: props.zIndex,
        padding: props.padding,
        fontSize: props.fontSize,
      }}
      onClick={props.function}
    >
      {props.title}
    </button>
  );
};

export default Button;
