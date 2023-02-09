import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

const QRScanner = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setResult(result);
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result.data}</p>
    </>
  );
};

export default QRScanner;
