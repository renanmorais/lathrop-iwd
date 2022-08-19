import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import LogoGDG from "../../assets/images/LogoGDG";
import styles from "../../styles/Navbar.module.css";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  // TODO: update with correct menu
  const menu = [{name: "Sobre", ref: "#"}, {name: "Palestrantes", ref: "#"}, {name: "Patrocinadores", ref: "#"}]

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
        if(window.pageYOffset === 0){
            setScrolling(false);
        } else {
            setScrolling(true);
        }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div className={isScrolling? styles.navbar_fixed_scrolling : styles.navbar_fixed}>
      <Navbar className={styles.main_navbar} color="faded" light expand="md">
        {isScrolling ? <NavbarBrand className={styles.nav_brand}><LogoGDG color="white"/></NavbarBrand> : null}
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse className={styles.collapse_menu} isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {menu.map((menuItems, index) =>
                <NavItem key={"nav-item-" + index}>
                    <NavLink className={styles.nav_link} style={{ color: isScrolling ? 'white': 'rgba(0,0,0,.55)' }} href={menuItems.ref}>{menuItems.name}</NavLink>
                </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;