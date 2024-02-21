import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import configValues from "helpers/config";
import IWDLogo from "../../assets/images/IWDLogo";
import styles from "../../styles/Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <Nav className={styles.FooterContainer}>
        <div className={styles.footerLinks}>
          <NavItem>
            <NavLink href="/about" className={styles.footerNavlink}>
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/speakers" className={styles.footerNavlink}>
              Palestrantes
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink
            href="/schedule"
            className={styles.footerNavlink}
          >
            Agenda
          </NavLink>
        </NavItem> */}
          <NavItem>
            <NavLink href="/sponsors" className={styles.footerNavlink}>
              Patrocinadores
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href={configValues.eventLinkRegistrationUrl}
              className={`${styles.footerNavlink} ${styles.registerButton}`}
              target="_blank"
            >
              <span>Inscreva-se</span>
            </NavLink>
          </NavItem>
        </div>
        <div className={styles.footerSocial}>
          <h6>
            27 de Abril de 2024 | HUB Goiás - Centro de Excelência em
            Empreendedorismo Inovador
          </h6>
        </div>
        <div className={styles.footerSocial}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" color="#e1306c" />
          <a
            href="https://maps.app.goo.gl/77nVpkFsNg38qsrS6"
            target="_blank"
            rel="noreferrer"
            className={styles.linkHover}
          >
            Localização Google Maps
          </a>
        </div>
        <div className={styles.footerSocial}>
          {/* <NavItem>
            <NavLink
              href="https://facebook.com/"
              target="_blank"
              className={`${styles.footerNavlink} ${styles.facebook}`}
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              href="https://www.instagram.com/wtmgoiania/"
              target="_blank"
              className={`${styles.footerNavlink} ${styles.instagram}`}
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              href="https://twitter.com/"
              target="_blank"
              className={`${styles.footerNavlink} ${styles.xtwitter}`}
            >
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/company/wtmgoiania/"
              target="_blank"
              className={`${styles.footerNavlink} ${styles.linkedin}`}
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </NavLink>
          </NavItem>
        </div>
        {/* <div className={styles.footerLogo}>
          <NavItem>
            <NavLink href="/">
              <IWDLogo color="white" height={50} />
            </NavLink>
          </NavItem>
        </div> */}
      </Nav>
    </footer>
  );
};

export default Footer;
