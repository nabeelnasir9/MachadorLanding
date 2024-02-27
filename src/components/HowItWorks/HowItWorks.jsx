import React, { useEffect } from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { SiChatbot } from "react-icons/si";
import { GiPlatform } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Aos from "aos";
import "aos/dist/aos.css";


const HowItWorks = () => {

  const features = [
    {
      name: 'Unlimited Clones',
      description: 'Create endless duplicates of your projects or chatbots, allowing you to expand your reach and capabilities without any limits. Perfect for growing your digital presence easily.',
      icon: SiChatbot,
    },
    {
      name: 'Multiple Platforms Integration',
      description: 'This feature effortlessly connects your documents & with a variety of other platforms, such as slack, notion, google drive and more, ensuring a seamless experience across the board for your users.',
      icon: GiPlatform,
    },
    {
      name: 'No Code Required',
      description: 'Even if you have never written a line of code in your life, you can still use this tool. It is designed with simplicity in mind, enabling you to set everything up with just a few clicks.',
      icon: FaCode,
    },
    {
      name: 'Advanced Security',
      description: 'Your data is protected with the latest in security technology, giving you peace of mind. This means your information is safe from hackers and other online threats.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Powerful Communication Network',
      description: 'Communicate more effectively than ever with our robust network, ensuring that your messages are delivered quickly and clearly, whether they are to customers, team members, or partners.',
      icon: CogIcon,
    },
    {
      name: 'Database Backups',
      description: 'Automatically saves copies of your important data at regular intervals, meaning you wll never have to worry about losing your work due to a crash or other unexpected problems.',
      icon: ServerIcon,
    },
  ]
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
<div className="relative bg-white py-16 sm:py-24 lg:py-32" data-aos="fade-up">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-cyan-600">Perks Of Using Machador</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need under one platform with 100% results
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                We provide you with multiple solutions for your daily workload. You are just one click away from increasing your productivity.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[rgba(16,163,209,1)] to-[rgba(0,213,187,1)] p-3 shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>  )
}

export default HowItWorks