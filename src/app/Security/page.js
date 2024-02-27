// import React from 'react'
"use client";
import './Secure.css';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {AlanAi} from "../../components/AlanAi/AlanAi";



const security = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  const stats = [
      { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
      { id: 2, name: 'Assets under holding', value: '$119 trillion' },
      { id: 3, name: 'New users annually', value: '46,000' },
    ]
  return (
    <div className="introductionMainContainer" data-aos="fade-up">



    <div className="bg-white">
{/* First Hero Section for Security Page */}
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#07C5C2] to-[#12A4CF] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    We’re changing the way people connect.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
                    labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
                    mollit id pariatur in voluptate cillum.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    </div>

{/* Section added for Security parts */}
      <section className="bg-black text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

      <p className="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>

    <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>
{/* Truties and Proves */}
       
    {/* Alan Ai Copied */}
        {/* <div className="security-layout_component">
          <div className="margin-bottom">
            <div className="header-text_align_center">
              <div className="max-width-large_3">
                <div className="margin-bottom margin-small">
                  <h2 className="heading-style-h2 white">
                    Reliable{" "}
                    <span className="text-color-gradient text-color-gradient_display">
                      and secure
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-grid section_security-grid" data-aos="fade-up">
            <div className="section_security-item">
              <div className="margin-bottom margin-small">
                <img
                  src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64ed8e2b485513aa3b834a26_icon-big-2.svg"
                  loading="lazy"
                  width="38.5"
                  alt="Blue icon data center"
                  className="icon-1x1-large"
                />
              </div>
              <div className="margin-bottom margin-small">
                <h3 className="heading-style-h3 text-align-center white ">
                  Private datasets
                </h3>
              </div>
              <div className="text-size-regular_normal text-align-center-2 white">
                Machador ingests data from your private datasets, no matter the
                source and format: web, text, PDF or JSON. Employ your
                organization&apos;s expertise for a hallucination-free
                conversational experience.
              </div>
              <div className="margin-top margin-medium margin-medium-copy">
                <div className="text-size-regular_normal">Learn more</div>
              </div>
            </div>
            <div className="section_security-item">
              <div className="margin-bottom margin-small">
                <img
                  src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64ed8e2a77a32a2968186383_icon-big-1.svg"
                  loading="lazy"
                  width="38.5"
                  alt="Blue icon sever"
                  className="icon-1x1-large"
                />
              </div>
              <div className="margin-bottom margin-small">
                <h3 className="heading-style-h3 text-align-center white">
                  Flexible deployment
                </h3>
              </div>
              <div className="text-size-regular_normal text-align-center-2 white">
                To fit the needs of any organization, we offer several
                deployment options, including cloud, on-premises and hybrid
                setups. Start fast in the cloud or bring workloads on-premises
                with Machador.
              </div>
              <div className="margin-top margin-medium-copy">
                <div className="text-size-regular_normal">Learn more</div>
              </div>
            </div>
            <div className="section_security-item">
              <div className="margin-bottom margin-small">
                <img
                  src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64ed8e2afb08732b85aa4868_icon-big.svg"
                  loading="lazy"
                  width="38.5"
                  alt="Blue Icon shield"
                  className="icon-1x1-large"
                />
              </div>
              <div className="margin-bottom margin-small">
                <h3 className="heading-style-h3 text-align-center white">
                  Data security
                </h3>
              </div>
              <div className="text-size-regular_normal text-align-center-2 white">
                We use cutting-edge industry algorithms to encrypt data both in
                transit and at rest. Furthermore, we go the extra mile to
                anonymize all conversational data, so that your users&apos;
                privacy is never at risk.
              </div>
              <div className="margin-top margin-medium margin-medium-copy">
                <div className="text-size-regular_normal">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_stack section--units-projets-dev" data-aos="fade-up">
          <div className="section_stack-padding-2">
            <div className="section_stack-container">
              <div className="section_stack-heading">
                <h2 className="heading-style-h2 text-color-white text-align-left">
                  Machador stack
                </h2>
              </div>
              <div className="section_stack-list">
                <div className="section_stack-item">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    Action transformer
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff8009266e7fa047896a_Action%20transformer.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          The Action Transformer is designed to engage with
                          users and the platform using natural language. This
                          compact language model understands user intent, solves
                          problems with high accuracy&nbsp;and initiates task
                          execution across various platform components and APIs.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Reinforcement learning
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Dialog state management
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Data routing
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              API calls and computation
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Queries to database
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Code generation
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Reinforcement learning
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Data routing
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Dialog state management
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Queries to database
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              API calls and computation
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Code generation
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://www2.alan-stage.app/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_stack-item item--2">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    LLMs
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff817513babb5e48d7b3_LLMs.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          Fine-tuned for accuracy, Machador&apos;s LLM seamlessly
                          processes data in our proprietary format to generate
                          clear human-like responses. It is trained to work
                          solely with provided data, eliminating the risk of
                          hallucinations and errors.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Large language models
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Private datasets
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Data formatting
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              OPT-based model
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Reinforcement learning
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Large Language Models
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              OPT-based model
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Reinforcement learning
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Data formatting
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Private datasets
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://www2.alan-stage.app/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_stack-item item--3">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    SemanticDB
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff80afb4f27913fe9319_Semantic%20database.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          The SemanticDB, which serves as the external memory,
                          employs our own hybrid vector-relational approach to
                          combine structured, unstructured and semi-structured
                          data, such as JSON, PDF&nbsp;and web, and handle
                          natural language queries.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Sharded data storage
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Vector embeddings and indexes
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Scalar indexes
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Crawling and parsing
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Scalar indexes
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Vector embeddings and indexes
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Crawling and parsing
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Sharded data storage
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://alans-top-notch-site-ae53b3.webflow.io/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_stack-item item--4">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    Semantic search
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff81a599d7f1e124884f_Semantic%20search.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          Machador&apos;s semantic search is designed for
                          intelligent searching in conversational AI. It
                          understands queries at the granular level and delivers
                          instant&nbsp;and accurate responses that are in line
                          with customers&apos; expectations.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language understanding
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Semantic understanding
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Contextual relevance
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Machine learning
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language understanding
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language interactions
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Machine learning
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Contextual relevance
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://www2.alan-stage.app/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_stack-item item--5">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    Generative AI
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff817576e9baae88b1d2_Generative%20AI.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          With a solid foundation in generative AI, Machador uses
                          your organization’s expertise and private datasets to
                          dynamically produce and adjust content on-demand,
                          setting the gold standard for AI interactions.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language understanding
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Large language models
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Text generation
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Content creation
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Private datasets
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Natural language understanding
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Large language models
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Text generation
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Content creation
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Private datasets
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://www2.alan-stage.app/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_stack-item item--6">
                  <h3 className="heading-style-h3 text-align-left text-color-white">
                    API integration
                  </h3>
                  <div className="section_stack-units">
                    <div className="units-work-dev__item-main-2">
                      <img
                        src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64eeff81e3f0649a05249af8_API%20integration.webp"
                        loading="lazy"
                        width={530}
                        alt=""
                        className="units-work-dev__item-img-2"
                      />
                    </div>
                    <div className="units-work-dev__item-content">
                      <div className="units-work-dev__item-stack">
                        <div className="text-size-large_normal text-color-white units-work-dev__item-text-stack">
                          Machador’s technology stack smoothly integrates with
                          your APIs, databases, app and software services,
                          enabling easy access to your business data and action
                          execution.
                        </div>
                        <div className="units-work-dev_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              API calls
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Database access
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              App integration
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              External data sources
                            </div>
                          </div>
                        </div>
                        <div className="units-work-mobile_text">
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              API calls
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              Database access
                            </div>
                          </div>
                          <div className="units-tech-work-dev__list">
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              App integration
                            </div>
                            <div className="text-size-regular_normal-2 units-tech-work-dev__item">
                              External data sources
                            </div>
                          </div>
                        </div>
                        <div className="units-work-button">
                          <a
                            href="https://alans-top-notch-site-ae53b3.webflow.io/actionable-ai-tech-stack"
                            className="button_2-2 is-link is-icon w-inline-block"
                          >
                            <div className="text-size-regular_normal-2 is-gray400">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <AlanAi/>

      </div>
  )
}

export default security




