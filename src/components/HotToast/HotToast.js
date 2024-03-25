import React from "react";
import { Toaster } from "react-hot-toast";

const HotToast = () => {
  return (
    <Toaster
      position="top-right"
      gutter={30}
      toastOptions={{
        success: {
          style: {
            height: 170,
            width: 700,
            fontSize: 40,
            margin: 50,
            textAlign: "center",
          },
          icon: "👏",
        },
      }}
      reverseOrder={false}
    />
  );
};

export default HotToast;
