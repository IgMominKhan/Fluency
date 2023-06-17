import React from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottieAnimation.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie className="!h-full" animationData={lottieAnimation} />
    </div>
  );
};

export default ErrorPage;
