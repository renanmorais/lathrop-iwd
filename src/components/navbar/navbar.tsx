/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useRef, useState } from "react";
import IWDLogo from "../../assets/images/IWDLogo";
import styles from "styles/Nav.module.css";
import configValues from "helpers/config";

export const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isNavbarVisible ? styles.visible : ""}`}
    >
      <div className={styles.logoContainer}>
        <a href="/">
          <IWDLogo height={40} color="#ffffff" />
        </a>
      </div>
      <ul className={styles.navItems}>
        <li>
          <a className={styles.navItem} href="/about">
            Sobre
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/speakers">
            Palestrantes
          </a>
        </li>
        {/* <li>
          <a className={styles.navItem} href="#schedule">
            Agenda
          </a>
        </li> */}
        <li>
          <a className={styles.navItem} href="/sponsors">
            Patrocinadores
          </a>
        </li>
        <li>
          <a
            className={`${styles.navItem} ${styles.navItemRegister}`}
            href={configValues.eventLinkRegistrationUrl}
            target="_blank"
            rel="noreferrer"
          >
            Inscreva-se
          </a>
        </li>
      </ul>
    </nav>
  );
};
