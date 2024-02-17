"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function Wavy() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-4">
      <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold inter-var text-center">
      Unleash Your Onboarding Journey with AI in Hours
            </p>
      <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
      A single copilot for Any Enterprise Workflow, No AI Expertise required!
      </p>
    </WavyBackground>
  );
}
