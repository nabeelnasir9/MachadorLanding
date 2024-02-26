import { HoverEffect } from "../ui/convert-hover-effect";
import { SiNotion } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { DiTrello } from "react-icons/di";
import { SiZapier } from "react-icons/si";
import { GiFireworkRocket } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdPaid } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";






export function ContentCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-3xl font-semibold text-black dark:text-black mb-4 text-center mt-10 pt-20">
        How Machador is <br />
      </h1>
      <span
        className="text-4xl md:text-[5rem] font-bold mt-1 mb-2 leading-none"
        style={{
          background:
            "linear-gradient(27deg, rgba(16,163,209,1) 0%, rgba(0,213,187,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Helping Your Business
      </span>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Efficiency Boost",
    description:
      "Machador takes care of repetitive tasks, like answering common questions or scheduling appointments, freeing up your team to focus on the more complex issues. It's like having an extra set of hands helping out with the workload.",
    link: "",
    icons: <GiFireworkRocket size={40} />,
  },
  {
    title: "Data Insights",
    description:
      "Imagine getting a clearer picture of what your customers want and need. Machador can analyze conversations and interactions, providing valuable insights that can help shape your services or products to better match customer expectations.",
    link: "",
    icons: <BsGraphUpArrow size={40} />,
  },
  {
    title: "Cost-Effective",
    description:
      "For someone starting up, every penny counts. Machador acts as a cost-effective solution, reducing the need for a large customer service team and minimizing expenses on customer engagement tools.",
    link: "",
    icons: <MdPaid size={40} />,
  },
  {
    title: "Quick Setup",
    description:
      "Entrepreneurs often wear many hats and don't have time to waste. Machador is easy to set up and integrate with your existing tools, meaning you can start improving your customer engagement right away without the need for extensive training or technical know-how.",
    link: "",
    icons: <FaTasks size={40} />,
  },

  {
    title: "Always On Support",
    description:
      "Imagine having a team member who never sleeps and is always there to answer questions from your customers, no matter the time of day. Machador can be that team member, offering instant answers and support, which means happier customers and fewer headaches for your team.",
    link: "",
    icons: <FaClockRotateLeft size={40} />,
  },
  {
    title: "Zapier",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "",
    icons: <SiZapier size={40} />,
  },
];
