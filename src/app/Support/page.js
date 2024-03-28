"use client";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Tailored to Your Needs:",
    description:
      "From basic introductions to advanced functionalities, our training sessions are customized to match your team’s skill level and business requirements.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Engaging and Interactive:",
    description:
      "Learn through live sessions, video tutorials, and interactive Q&As to ensure a thorough understanding of Machador's capabilities.",
    icon: LockClosedIcon,
  },
];

const featuresss = [
  {
    name: "Always Available",
    description:
      "Our dedicated support team is available around the clock to assist with any queries or issues you may encounter.      ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Multiple Channels",
    description:
      "Reach out to us via email, chat, or phone. We’re here to help in whichever way suits you best.      ",
    icon: LockClosedIcon,
  },
];

const featuress = [
  {
    name: "Ongoing Education:",
    description:
      "As Machador evolves, so do our training materials. Stay up to date with regular updates and new feature guides.      ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Community Support:",
    description:
      "Join the Machador community to share insights, tips, and best practices with other users.      ",
    icon: LockClosedIcon,
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
          Unparalleled Training and{" "}
          <span className="relative whitespace-nowrap text-black">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#189CCD]"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative"> Support </span>
          </span>{" "}
          at Machador{" "}
        </h1>
        <p className="mx-auto mt-6 max-w-6xl text-lg tracking-tight text-slate-700">
          At Machador, we believe in empowering our clients not just with tools,
          but with knowledge. Our comprehensive training programs and support
          systems are designed to ensure you make the most out of our AI-driven
          solutions.
        </p>
      </div>

      <main>
        {/* Logo Cloud */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Customized Training Programs
                  </p>

                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <br />
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="conf.png"
                alt="Product screenshot"
                className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] md:-ml-4 lg:-ml-0"
                width={632}
                height={742}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-cyan-500">
                  Keep on Learning
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Continuous Learning
                </p>
                <p className="mt-6 text-md leading-6 text-gray-600">
                At Machador, we believe in empowering our clients not just with tools, but with knowledge. Our comprehensive training programs and support systems are designed to ensure you make the most out of our AI-driven solutions.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {featuress.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <br />
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                src="/conf1.png"
                alt="Product screenshot"
                className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
                width={1132}
                height={742}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  24/7 Support
                  </p>

                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {featuresss.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <br />
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="serv.png"
                alt="Product screenshot"
                className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] md:-ml-4 lg:-ml-0"
                width={632}
                height={742}
              />
            </div>
          </div>
        </div>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#0EA7CF] mix-blend-multiply" />
            </div>
            <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Your Success Is Our Priority{" "}
                </span>
                <span className="block text-white">at Machador</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Our commitment to your success drives our training and support
                initiatives. With Machador, you’re never alone on your journey
                to transforming your business with AI.
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
    </div>
  );
}
