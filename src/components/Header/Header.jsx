import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}>
      <Menu setActive={setActive} className="flex items-center justify-around">
        <h1 className={styles.LogoHeader}>machador.</h1>
        
        <div className="flex justify-between items-center gap-10">
          <MenuItem setActive={setActive} active={active} item="Enterprise">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Affiliates">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Security">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
                description="Production ready Tailwind css components for your next project."
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
                description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>
        <div className="flex gap-3">
          <button className={styles.getStartedButton}>Get In Touch</button>
          <button className={styles.NavbarLogin}>Login</button>
        </div>
      </Menu>
    </div>
  );
}

export default Header;
