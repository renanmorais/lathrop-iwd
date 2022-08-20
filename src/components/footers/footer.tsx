/*eslint-disable*/
import React from "react";
import LogoGDG from "../../assets/images/LogoGDG";
// reactstrap components
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import styles from "../../styles/Footer.module.css";
interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <>
      <Container fluid>
        <Nav className={styles.footer_content}>
          <NavItem>
            <NavLink active href="#">
              <LogoGDG />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/speakers">Palestrantes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sponsors">Patrocinadores</NavLink>
          </NavItem>
          {/*<NavItem>
            <NavLink href="#">Agenda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Organizadores</NavLink>
  </NavItem>
          <NavItem className={styles.footer_register}>
            <NavLink href="#">Se cadastrar</NavLink>
  </NavItem>*/}
        </Nav>
      </Container>
    </>
  );
};

export default Footer;
