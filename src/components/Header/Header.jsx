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
      link: "/",
    },
    {
      name: "Ambassedor",
      link: "/about/overview",
      subPages: [
        {
          name: "Overview",
          link: "/about/overview",
        },
        {
          name: "Vision",
          link: "/about/overview#vision",
        },
        {
          name: "Mission",
          link: "/about/overview#mission",
        },
        {
          name: "President's Message",
          link: "/about/president-message",
        },
        {
          name: "Quality Objectives",
          link: "/about/quality-objectives",
        },
      ],
    },
    {
      name: "Security",
      link: "/services/industrial",
      subPages: [
        {
          name: "Industrial Works",
          link: "/services/industrial",
        },
        {
          name: "Mechanical Works",
          link: "/services/mechanical",
        },
        {
          name: "Plants Works",
          link: "/services/plants",
        },
        {
          name: "Welding Works",
          link: "/services/welding",
        },
        {
          name: "Shutdown Works",
          link: "/services/shutdowns",
        },
        {
          name: "Instrumentation Works",
          link: "/services/instrumentation",
        },
      ],
    },
    {
      name: "Pricing",
      link: "/clients",
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
              <img
                src="/world.png"
                alt=""
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 10,
                }}
              />{" "}
              {/* <select value={locale} onChange={handleOnChange}>
                <option value={"en"}>En</option>
                <option value={"ar"}>Ar</option>
              </select> */}
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
          <img
            src="/world.png"
            alt=""
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
          />
          {/* <select value={locale} onChange={handleOnChange}>
            <option value={"en"}>En</option>
            <option value={"ar"}>Ar</option>
          </select> */}
        </div>
      </header>
    </div>
  );
}