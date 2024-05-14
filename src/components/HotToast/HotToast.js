import React from "react";
import { Toaster } from "react-hot-toast";

const HotToast = () => {
  return (
    <Toaster
      gutter={30}
      toastOptions={{
        success: {
          position: "top-right",
          style: {
            height: 170,
            width: 700,
            fontSize: 40,
            margin: 50,
            textAlign: "center",
          },
          icon: "👏",
        },
        error: {
          position: "top-right",
          style: {
            height: 140,
            width: 700,
            fontSize: 40,
            margin: 50,
            textAlign: "center",
          },
        },
      }}
      reverseOrder={false}
    />
  );
};

export default HotToast;
