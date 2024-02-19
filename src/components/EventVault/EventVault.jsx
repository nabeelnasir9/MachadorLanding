import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EventVault() {
  return (
    <div className="border border-black/[0.2]  flex flex-col items-start max-w-xl mx-auto p-4 relative h-[40rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

      <EvervaultCard text="Security" />

    </div>
  );
}
