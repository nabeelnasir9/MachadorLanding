import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Basic Plan',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '€8.99',
    description: 'The essentials to provide your best work for clients.',
    features: ['Customized chatbot for company onboarding system', 'Essential features and functionalities', 'Email support', 'Suitable for small businesses or startups with minimal onboarding needs or low hiring volumes','20k tokens per month'],
    mostPopular: false,
  },
  {
    name: 'Standard Plan',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '€15.99',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'Customized chatbot for company onboarding system',
      'Additional features such as analytics, reporting, and integration options',
      'Priority email support',
      'Suitable for medium-sized businesses with moderate onboarding requirements and average hiring volumes',
      '50k tokens per month',
    ],
    mostPopular: true,
  },
  {
    name: 'Premium Plan',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '€29.99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Highly customized chatbot tailored to specific client needs',
      'Advanced features like AI-driven decision-making, multi-platform integration, and advanced analytics',
      'Priority email and phone support',
      'Regular performance reviews and optimizations',
      '100k tokens per month',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-black">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Get the right plan for your budget - packed with everything your business needs to grow, plus friendly support to help you along the way.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 '
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-[#0ED0B5]' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-[#0ED0B5] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-black-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#0ED0B5] text-white shadow-sm hover:bg-[#0ED0B5]'
                    : 'text-[#0ED0B5] ring-1 ring-inset ring-[#0ED0B5] hover:ring-indigo-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ED0B5]'
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
