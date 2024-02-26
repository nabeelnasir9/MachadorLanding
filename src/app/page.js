"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HeroSection from "@/components/Herosection/HeroSection";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { GoogleGeminiEffectDemo } from "@/components/GoogleProgress/GoogleProgress";
import { AlanAi } from "@/components/AlanAi/AlanAi";
import { ContentCards } from "../components/ContentCards/ContentCards";
import { EventVault } from "@/components/EventVault/EventVault";
import { Wavy } from "@/components/Wavy/Wavy";
import About from "@/components/About/About";
import { AnimatedTooltipPreview } from "@/components/Tooltip/Tooltip";
import { SVGMaskEffectDemo } from "@/components/RevealCard/RevealCard";
// import TestimonialComponent, { InfiniteMovingCardsDemo } from "@/components/Testimonial/Testimonial";
import Pricing from "@/components/Pricing/Pricing";
import Loader from "@/components/Loader/Loader";
import Comparison from "@/components/Comparison/Comparison";
import { BackgroundBeamsDemo } from "@/components/WishList/WishLst";
import { BentoGridThirdDemo } from "@/components/CardContainer/CardContainer";
import Footer from "@/components/Footer/Footer";
import { StickyScrollRevealDemo } from "@/components/Scroll/Scroll";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { ThreeDCardDemo } from "@/components/3dcard/3dcard";
import HomeIcons from "../components/HomeIcons/HomeIcons";
import CalendlyComponent from "@/components/Calendly/CalendlyComponent";
import { ParallaxScrollDemo } from "@/components/paralleax/paralleax";
import Scene from "@/components/Blob/Blob";
import Testimonial from "../components/Testimonial/Testimonial";
import { AnimatedPinDemo } from "@/components/3dPin/3dPin";
import FAQ from "@/components/FAQS/FAQS";
import Render from "../components/Render/Render";
import CTA from "@/components/CTA/CTA";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
      <>
        {/* <Wavy /> */}
        {/* <div className="w-screen h-[100vh] overflow-hidden">
            <Scene />
          </div> */}
        <HomeIcons />
        <Dashboard />
        <Render />
        {/* <HowItWorks /> */}
        <ContentCards />
        <About />
        <Comparison />


        {/* <HeroSection /> */}

        <BentoGridThirdDemo />

        <ThreeDCardDemo />
        <GoogleGeminiEffectDemo />
        <StickyScrollRevealDemo />
        <CalendlyComponent />
        {/* <ParallaxScrollDemo /> */}
        <AlanAi />
        {/* <AnimatedPinDemo/> */}
        {/* <EventVault /> */}
        <Pricing />
        {/* <BackgroundBeamsDemo /> */}
        <FAQ />

        <Testimonial />
        <CTA/>
      </>
      )}
    </React.Fragment>
  );
}
