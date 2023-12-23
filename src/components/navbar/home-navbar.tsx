import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import IWDLogo from "../../assets/images/IWDLogo";
import styles from "../../styles/Navbar.module.css";

const NavbarHome = () => {
  const router = useRouter();
  const [isScrolling, setScrolling] = useState(false);

  const menu = [
    { name: "Sobre", ref: "#about" },
    { name: "Palestrantes", ref: "#speakers" },
    // { name: "Agenda", ref: "#schedule" },
    { name: "Patrocinadores", ref: "#sponsors" },
    { name: "Inscreva-se", ref: "#tickets" },
  ];

  const generateRef = (ref: string) => {
    if (ref.includes("https")) {
      return ref;
    }
    return router.pathname != "/" ? `/${ref}` : ref;
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={
        isScrolling ? styles.navbar_fixed_scrolling : styles.navbar_fixed
      }
    >
      <Navbar className={styles.main_navbar}>
        <NavbarBrand className={styles.nav_brand}>
          <IWDLogo height={40} color={isScrolling ? "#ffffff" : "#000000"} />
        </NavbarBrand>
        <Nav>
          {menu.map((menuItems, index) => (
            <NavItem key={"nav-item-" + index}>
              <NavLink
                className={
                  isScrolling
                    ? [styles.nav_link, styles.shadow_scrolling].join(" ")
                    : styles.nav_link
                }
                style={{ color: isScrolling ? "#ffffff" : "#000000" }}
                href={generateRef(menuItems.ref)}
              >
                {menuItems.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </nav>
  );
};

export default NavbarHome;
