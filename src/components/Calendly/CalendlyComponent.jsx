import React from 'react';
import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid';


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

  const benefits = [
    'Need custom solution for your business?',
    'Want to know more about Machador?',
    'What are the future goals of Machador?',
    'Know us better, let us know you!',
    'Looking for the advanced beta version of Machador?',

  ]
  

  return (
      
<div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-[rgba(16,163,209,1)] to-[rgba(0,213,187,1)] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.1" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#11CEB6" />
                <stop offset={1} stopColor="#0EA5CF" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
Want to know more             <br />
about Machador? Book your meeting now!           </h2>
            <p className="mt-6 text-lg leading-6 text-white">
            Setting up a meeting shouldn’t be hard work. That’s why we’ve made it super simple for you to schedule a time to chat about your business needs. Just pick the time that works for you, and you’re all set! No more back-and-forth to find the perfect time.            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <ul
                role="list"
                className="mt-1 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-1"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-[auto] bg-white">
         <iframe
           src={calendlyUrl}
           width="100%"
           height="100%"
           frameBorder="0"
           className="rounded-lg bg-white"
           allowFullScreen

         ></iframe>
       </div>
        </div>
      </div>
    </div>

     
   
       
  );
};

export default CalendlyComponent;
