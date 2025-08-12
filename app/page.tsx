"use client";
import Lottie from "lottie-react";
import animationData from "@/public/climb_the_mountain.json";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingAnimation />
    </div>
  );
}

function LoadingAnimation() {
  return (
    <div className="w-1/2 h-1/2">
      <Lottie animationData={animationData} />
    </div>
  );
}
