import { HoverEffect } from "../ui/convert-hover-effect";

export function ContentCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1
              className="text-3xl font-semibold text-black dark:text-black mb-4 text-center"
              
            >
              How Machador is <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 mb-2 leading-none" style={{
                background:
                  "linear-gradient(27deg, rgba(16,163,209,1) 0%, rgba(0,213,187,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Helping Your Business
              </span>
            </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
