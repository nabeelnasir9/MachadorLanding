"use client"
import React, {useState} from "react";
import styles from "./Header.module.css";
import Image from "next/image";
// import { useLocalization } from "../../context/LocalizationContext";
import Link from "next/link";

export default function Header() {
  // const { handleOnChange} = useLocalization();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigations = [
   
    {
      name: "Enterprise",
      link: "/Enterprise",
      subPages: [
        {
          name: "Customized Solutions",
          link: "/Enterprise",
        },
        {
          name: "Data Privacy & Security",
          link: "/Enterprise",
        },
        {
          name: "Training & Support",
          link: "/Enterprise",
        },
        {
          name: "Success Stories",
          link: "/Enterprise",
        },
        {
          name: "Contact & Inquiry",
          link: "/Enterprise",
        },
      ],
    },
    
    {
      name: "How it Works",
      link: "/about",
      subPages: [
        {
          name: "Security",
          link: "/Security",
        },
        {
          name: "Features",
          link: "/API",
        },
      ],
    },
    {
      name: "Be a Machador",
      link: "/partner",
      subPages: [
        {
          name: "Affiliate Programme",
          link: "/Affiliate",
        },
        {
          name: "Become a Partner",
          link: "/partner",
        }
      ],
    },
    
    {
      name: "Company",
      link: "/company",
      subPages: [
        {
          name: "History",
          link: "/company",
        },
        {
          name: "Mission",
          link: "/mission",
        },
        {
          name: "Team",
          link: "/Team",
        },
      ],
    },
    {
      name: "Pricing",
      link: "/Pricing",
    },
  
  ];
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={"/logoo.png"}
            height={70}
            width={200}
            alt="Logo"
            objectFit="contain"
          />
        </Link>
        <div className={styles.hamburger}>
          <input type="checkbox" checked={menuOpen} onChange={toggleMenu}/>
          <span className={styles.hamburgerItem1}></span>
          <span className={styles.hamburgerItem2}></span>
          <span className={styles.hamburgerItem3}></span>
          <div className={styles.mobileNav}>
            <div>
              <Image
                src={"/logoo.png"}
                height={70}
                width={170}
                alt="Logo"
                objectFit="contain"
              />
              <ul>
                {navigations.map((item, index) => (
                  <li key={index}>
                    {/* {remove plus from icon name} */}
                    <Link href={item?.link} onClick={closeMenu}>
                      <span>{item?.name} </span>
                    </Link>
                    <input type="checkbox" />
                    {item?.subPages?.length && (
                      <span className={styles.plusIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                          />
                        </svg>
                      </span>
                    )}
 
                    {item?.subPages && (
                      <ul className={styles.mobileSubNav}>
                        {item?.subPages.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={subItem?.link} onClick={closeMenu}>{subItem?.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.mobileLang}>
             <Link href="/Contact">
            <button
        type="button"
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Get In Touch
      </button>
      </Link>
      <button
        type="button"
        className="rounded-full bg-gradient-to-r from-[rgba(16,163,209,1)] to-[rgba(0,213,187,1)] px-3.5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  hover:bg-gray-50 hover:text-black"
      >
        Login
      </button>
            </div>
          </div>
        </div>
        <ul className={styles.nav}>
          {navigations.map((item, index) => (
            <li key={index}>
              <Link href={item?.link}>
                {item?.name}{" "}
                {item?.subPages?.length && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                    />
                  </svg>
                )}
              </Link>
              {item?.subPages && (
                <ul className={styles.subNav}>
                  {item?.subPages.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem?.link}>{subItem?.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.phoneContainer}>
        <Link href="/Contact">
        <button
        type="button"
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-cyan-500 shadow-sm ring-1 ring-inset ring-cyan-500 hover:bg-gray-50"
      >
        Get In Touch
      </button>
      </Link>
      <button
        type="button"
        className="rounded-full bg-gradient-to-r from-[rgba(16,163,209,1)] to-[rgba(0,213,187,1)] px-3.5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  hover:bg-white hover:text-white"
      >
        Login
      </button>
                 </div>
      </header>
      
    </div>
  );
}