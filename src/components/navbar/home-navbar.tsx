import React, { useState } from 'react';
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

const NavbarHome = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navbar_fixed}>
      <Navbar {...args} color="faded" light expand="md">
        <NavbarBrand href="/"><LogoGDG /></NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse className={styles.collapse_menu} isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem >
              <NavLink className={styles.nav_link} href="/about/">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.nav_link} href="/speakers/">Palestrantes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.nav_link} href="/sponsors/">Patrocinadores</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;