import React from "react";
import { css } from "glamor";

const SkipMessage = (props) => {
  const fontSize = props.size / 100*13;
  const inFlag = props.inFlag;

  const anime = css.keyframes({
    "0%": { transform: "scale(0.1)", opacity: 0, visibility: "visible" },
    "20%": { transform: "scale(1.2)", opacity: 1, visibility: "visible" },
    "40%": { transform: "scale(1)", opacity: 1, visibility: "visible" },
    "90%": { transform: "scale(1)", opacity: 1, visibility: "visible" },
    "100%": { transform: "scale(0.1)", opacity: 0, visibility: "visible" },
  });

  const animation = inFlag
    ? css({
        animation: `${anime} 2s`,
      })
    : null;

  const tmp_style = css({
    height: "20%",
    width: "60%",
    backgroundColor: "rgb(128,128,128,0.9)",
    position: "absolute",
    zIndex: 10,
    top: "40%",
    left: "20%",
    borderRadius: "5% / 15%",
    visibility: "hidden",
    fontSize: fontSize,
  });
  const txt_style = css({
    margin: "0 auto",
    display: "block",
  });

  return (
    <div {...tmp_style} {...animation}>
      <div {...txt_style}>SKIP</div>
    </div>
  );
};

export default SkipMessage;
