import React from "react";
import { useRouter } from "next/router";
import { Nav, NavItem, NavLink } from "reactstrap";
import configValues from "../../helpers/config";
import IWDLogo from "../../assets/images/IWDLogo";
import styles from "../../styles/Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const router = useRouter();
  const generateRef = (ref: string) => {
    return router.pathname != "/" ? `/${ref}` : ref;
  };

  return (
    <>
      <Nav className={styles.FooterContainer}>
        <NavItem>
          <NavLink href="#">
            <IWDLogo color="white" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href={generateRef("#speakers")}
            className={styles.footerNavlink}
          >
            Palestrantes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href={generateRef("#schedule")}
            className={styles.footerNavlink}
          >
            Agenda
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href={generateRef("#sponsors")}
            className={styles.footerNavlink}
          >
            Patrocinadores
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href={configValues.eventLinkRegistrationUrl}
            className={styles.footerNavlink}
          >
            Inscreva-se
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Footer;
