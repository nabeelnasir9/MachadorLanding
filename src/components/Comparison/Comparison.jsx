// import React, { useEffect } from "react";
// import "./Comparison.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

// export default function Comparison() {
//   useEffect(() => {
//     Aos.init({
//       duration: 100,
//     });
//   }, []);
//   return (
//     <div className="mainCoparisonContainer">
//       <div className="left">
//         <div className="leftContainer">
//           <ul>
//             {[0, 1, 2, 3, 4, 5].map((item, index) => (
//               <li key={index} data-aos="fade-up" data-aos-delay={index * 300}>
//                 <div>
//                   <span className="tick">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1.5em"
//                       height="1.5em"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
//                       />
//                     </svg>{" "}
//                   </span>
//                 </div>
//                 <p style={{ color: "black", fontWeight: "600" }}>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
//                   fuga placeat
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="machador">
//           <h1>Machador</h1>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="2em"
//             height="2em"
//             viewBox="0 0 512 512"
//           >
//             <path
//               fill="#FFF"
//               d="m456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40"
//             />
//           </svg>
//         </div>
//       </div>
//       <span className="text-black font-bold text-2xl">VS</span>
//       <div className="right">
//         <div className="rightContainer">
//           <ul>
//             {[0, 1, 2, 3, 4, 5].map((item, index) => (
//               <li key={index} data-aos="fade-up" data-aos-delay={index * 300}>
//                 <div>
//                   <span className="cross">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1.5em"
//                       height="1.5em"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//                 <p style={{ color: "black", fontWeight: "600" }}>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
//                   fuga placeat
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="rightSectionLabel">
//           <h1>Other&apos;s</h1>
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="2em"
          //   height="2em"
          //   viewBox="0 0 512 512"
          // >
          //   <path
          //     fill="#FFF"
          //     d="m456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40"
          //   />
          // </svg>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from "react";
import "./Comparison.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Comparison() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjusted for a clearer animation effect
    });
  }, []);

  // Array of comparison points
  const comparisonPoints = [
    { machador: "You don't need to be a tech wizard to get Machador up and running. It's designed to be super easy for anyone to set up and start using, no coding required.", others: "With other tools, you might need to know a bit more about technology or even do some coding to get things working. It can be a bit more of a hassle." },
    { machador: "Machador is like the friend who gets along with everyone. It easily works with lots of different tools and platforms, like Docs, Slack, Notion, and Google Drive, making your life easier.", others: "Other tools might not play as nicely with your favorite apps. Sometimes they work well with one or two things but might leave out others, making it a bit trickier to have everything working together seamlessly." },
    { machador: "Promises up to 80% workload reduction through automation.", others: "Workload reduction varies, with less emphasis on automation." },
    { machador: "A one-stop solution integrating a wide array of tools for businessess.", others: "Requires multiple platforms for a full suite of tools and not reliable prices" },
  ];

  return (
    <div className="mainComparisonContainer">
      <div className="left">
        <div className="leftContainer">
          <ul>
            {comparisonPoints.map((point, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 300}>
                <div>
                  <span className="tick"> 
                                 <svg
                      xmlns="http://www.w3.org/2000/svg"
                       width="1.5em"
                       height="1.5em"
                       viewBox="0 0 24 24"
                       color="white"
                     >
                       <path
                         fill="currentColor"
                         d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                       />
                     </svg>
                  {/* SVG icon for tick remains the same */} </span>
                </div>
                <p style={{ color: "black", fontWeight: "600" }}>{point.machador}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="machador">
          <h1 className="white">Machador</h1>
          {/* Machador logo SVG */}
        </div>
      </div>
      <span className="text-black font-bold text-2xl">VS</span>
      <div className="right">
        <div className="rightContainer">
          <ul>
            {comparisonPoints.map((point, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={index * 300}>
                <div>
                  <span className="cross">                    <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="1.5em"
                       height="1.5em"
                       viewBox="0 0 20 20"
                       color="white"
                     >
                       <path
                         fill="currentColor"
                         d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698"
                       />
                     </svg> </span>
                </div>
                <p style={{ color: "black", fontWeight: "600" }}>{point.others}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightSectionLabel">
          <h1 className="white">Others</h1>
          
          {/* Other solutions' logo SVG or placeholder */}
        </div>
      </div>
    </div>
  );
}
