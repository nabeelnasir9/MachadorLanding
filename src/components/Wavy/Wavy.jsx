"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import './Wavy.css';
import Link from 'next/link';

export function Wavy() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-4 flex flex-col items-center gap-5">
      <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold inter-var text-center">
      Unleash Your Onboarding Journey with AI in Hours
            </p>
      <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
      A single copilot for Any Enterprise Workflow, No AI Expertise required!
      </p>
      <Link href="https://machador-fe.vercel.app/login">
      <button className="Hero-learn-more">
  <span className="Hero-circle" aria-hidden="true">
  <span className="Hero-icon"></span>
  </span>
  <span className="Hero-button-text">Create Your First Assistant</span>
</button>
</Link>
    </WavyBackground>
  );
}
