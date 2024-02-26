import React from 'react';
import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';


const CalendlyComponent = () => {
  const calendlyUrl = 'https://calendly.com/codseedpak/30min';
  const features = [
    {
      name: 'Make Working Together Easy:',
      description:
        'Whether you are sharing ideas on Notion, chatting in Slack, or sharing files in Google Drive, this helper makes everything run smoother. It is like your work buddy, always there to lend a hand.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Get Stuff Done Faster, Everywhere:',
      description: 'Think of a super assistant that knows just how to work with all the apps you love—Docs for writing, Google Drive for keeping files, and even Slack for talking to your team.',
      icon: LockClosedIcon,
    },
    {
      name: 'Connect, Create, and Collaborate - Effortlessly:',
      description: 'With an assistant that effortlessly integrates with platforms like Docs for creation, Notion for organization, Slack for communication, and Google Drive for storage, your ability to create and collaborate is unlimited. Streamline your work and bring your best ideas to life, effortlessly.',
      icon: ServerIcon,
    },
  ]

  return (
      
      // <div className="w-full h-full flex justify-center items-center bg-white">
      //   <iframe
      //     src={calendlyUrl}
      //     width="100%"
      //     height="100%"
      //     frameBorder="0"
      //     className="rounded-lg"
      //     allowFullScreen
      //   ></iframe>
      // </div>


     
       <div className="w-full h-full bg-white h-screen">
         <iframe
           src={calendlyUrl}
           width="100%"
           height="100%"
           frameBorder="0"
           className="rounded-lg bg-white"
           allowFullScreen

         ></iframe>
       </div>
       
  );
};

export default CalendlyComponent;
