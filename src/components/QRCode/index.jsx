import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const QRcode = (props) => {
  return (
    <div>
      <QRCode
        size={256}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "100%",
          padding: "1rem",
        }}
        value={props.value ? props.value : "empty"}
        viewBox={`0 0 256 256`}
        // bgColor={"var(--bg-color)"}
        fgColor={"var(--secondary-color)"}
      />
    </div>
  );
};

export default QRcode;
