// import Image from 'next/image';
// import "./HomeIcon.css";

// const HomeIcons = () => {
//   const icons = [
//     '/icon1.png',
//     '/icon2.png',
//     '/icon3.png',
//     '/icon4.png',
//     '/icon5.png',
//     '/icon6.png',
//     '/icon7.png',
//   ];
//   return (
//     <div className="Iconsmain">
//         <p className="Iconsmain-para"> 100+ Companie&apos;s that <span className="IconsSpanHead">have trusted us</span></p>
//     <div className="icons-wrapperIcons">
//       {icons.map((iconSrc, index) => (
//         <div key={index} className="Iconsicon-container">
//           <Image src={iconSrc} alt={`Icon ${index + 1}`} width={100} height={100} className="icon-Icons" />
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default HomeIcons;



export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/icon1.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/icon2.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/icon3.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/icon4.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/icon5.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

