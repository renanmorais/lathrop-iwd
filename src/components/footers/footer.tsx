/*eslint-disable*/
import React from "react";
import LogoGDG from "../../assets/images/LogoGDG";
// reactstrap components
import { Nav, NavItem, NavLink } from "reactstrap";
import styles from "../../styles/Footer.module.css";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
          <div className={styles.container}>
          
        <Nav className={styles.footer_content}>
          <NavItem>
            <NavLink active href="#">
            <LogoGDG />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Palestrantes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Agenda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Patrocinadores</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Organizadores</NavLink>
          </NavItem>
          <NavItem className={styles.footer_register}>
            <NavLink href="#">Se cadastrar</NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default Footer;
