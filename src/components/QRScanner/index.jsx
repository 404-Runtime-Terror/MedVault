import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

const QRScanner = (props) => {
  const delay = 500;

  const previewStyle = {
    height: "fit-content",
    width: 320,
  };

  const handleScan = (result) => {
    if (result) {
      props.setResut(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  React.useEffect(() => {
    var constraints = { audio: false, video: true };

    function successCallback(stream) {
      console.log("navigator.getUserMedia success: ", stream);
    }

    function errorCallback(error) {
      console.log("navigator.getUserMedia error: ", error);
    }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(successCallback)
      .catch(errorCallback);
  }, []);

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </>
  );
};

export default QRScanner;
