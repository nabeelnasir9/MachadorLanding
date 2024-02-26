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


      <div className="overflow-hidden bg-white py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-black">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Integrate effortlessly across multiple platforms</p>
              <p className="mt-6 text-medium leading-6 text-black text-justify">
               Meet your network where they are and build familiarity with
             infinitely more people, on a hyper-personalized level. Whether you
             want your clone embedded on your own website, integrated with our
             API, in Slack, LinkTree, Instagram, TikTok, email, SMS or somewhere
             else, your Machador clone can be used anywhere to engage with your
             fans.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 text-justify">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-black" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-justify">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default CalendlyComponent;
