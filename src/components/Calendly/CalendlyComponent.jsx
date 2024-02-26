import React from 'react';
import Image from 'next/image';

const CalendlyComponent = () => {
  const calendlyUrl = 'https://calendly.com/codseedpak/30min'; // Replace with your Calendly link

  return (
    <div className="flex w-full h-screen">
      {/* Image Container */}
      {/* <div className="w-1/2 h-full">
        <iframe src="https://lottie.host/embed/c344f162-2f98-4aed-9e98-913735614827/pw1uiHUGBR.json" width="1000" height="1000" background="transparent" speed="1" className="object-cover w-full h-full"></iframe>
      </div> */}

      {/* Calendly Embed Container */}
      <div className="w-full h-full flex justify-center items-center bg-white">
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CalendlyComponent;
