const stats = [
    { id: 1, name: 'Companies On Boarded', value: '50+' },
    { id: 2, name: 'Security Of Your Data', value: '100%' },
    { id: 3, name: 'Guaranteed Results', value: '99.9%' },
    { id: 4, name: 'Reduce Time & Improve Productivity', value: '100%' },
  ]
  
  export default function Trusties() {
    return (
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by 50+ companies worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We are the emerging pinoeers in worldwide. Here is how!
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  