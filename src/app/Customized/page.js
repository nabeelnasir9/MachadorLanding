"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoIosTrendingUp } from "react-icons/io";
import { MdSyncProblem } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";






const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const features = [
  {
    name: "AI Expertise",
    description:
      "Leverage our cutting-edge AI technology, designed to preserve your employees' invaluable knowledge and facilitate an engaging onboarding experience. Our expertise in AI-driven solutions transforms the way your team interacts with knowledge, making it more accessible and actionable.",
    icon: GrUserExpert,
  },
  {
    name: "Track Record of Success",
    description:
      "We are proud of our history of delivering excellence. Our customized solutions have empowered businesses across various industries to optimize their onboarding processes, enhance productivity, and secure their knowledge assets effectively.      ",
    icon: IoIosTrendingUp,
  },
  {
    name: "Complex Problem Solving",
    description:
      " No challenge is too big for us. Machador thrives on solving complex problems with innovative solutions that are not just effective but also easy to integrate into your existing systems.      ",
    icon: MdSyncProblem,
  },
  {
    name: "Case Studies and Success Stories",
    description:
      " Our portfolio of success stories and case studies from companies that have benefited from our customized solutions speaks volumes about our ability to deliver results. These narratives showcase the transformation and impact Machador has had on businesses like yours.      ",
    icon: PencilSquareIcon,
  },
  {
    name: "Unparalleled Support",
    description:
      "We believe in forging lasting partnerships with our clients. Our customer support and service level agreements (SLAs) for enterprise customers set a new standard in the industry, ensuring you always have the assistance you need, when you need it.",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Security and Compliance",
    description:
      "Security is not an afterthought at Machador. Our solutions are built with robust security features and compliance standards, including GDPR, to protect your data and ensure your peace of mind.",
    icon: ArrowUturnLeftIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white mt-20">
      <div className="pb-16 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-6xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Get Your{" "}
          <span className="relative whitespace-nowrap text-black">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#189CCD]"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Customized </span>
          </span>{" "}
          Solution for Enterprise & businesses.
        </h1>
        <p className="mx-auto mt-6 max-w-5xl text-lg tracking-tight text-slate-700">
          At Machador, we understand that every organization has unique needs
          and challenges. That's why we offer tailor-made solutions that adapt
          seamlessly to your specific requirements, ensuring your business
          thrives in an ever-evolving landscape. Our dedication to providing
          personalized services is at the core of our mission, making us the
          preferred partner for businesses seeking innovative, efficient, and
          secure onboarding processes.
        </p>
      </div>

      <main>
         {/* Logo Cloud */}
         <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-center text-base font-semibold text-gray-500">
              Trusted by over 5 very large businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="/icon1.png"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="/icon2.png"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="/icon3.png"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="/icon4.png"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="/icon5.png"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
               
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#0EA7CF] mix-blend-multiply" />
              </div>
              <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Ready for your </span>
                  <span className="block text-white">
                  Customized Solution?
                                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Let's discuss how Machador can tailor a solution that fits your unique business needs. Our team is ready to work with you to develop a strategy that not only addresses your current challenges but also positions you for future success.

                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="/Contact"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-cyan-500 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="https://machador-frontend.vercel.app/login"
                      className="flex items-center justify-center rounded-md border border-transparent bg-cyan-800 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Gradient Feature Section */}
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-500">Customized Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose Machador's Customized Solutions?
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-7 w-7 flex-none text-cyan-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                 
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

      </main>
    </div>
  );
}
