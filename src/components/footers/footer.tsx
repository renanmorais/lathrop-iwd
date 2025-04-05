import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import configValues from "helpers/config";
import styles from "../../styles/Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <Nav className={styles.FooterContainer}>
        <div className={styles.footerLinks}>
          <NavItem>
            <NavLink href="/" className={styles.footerNavlink}>
              Home
            </NavLink>
          </NavItem>
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
            <NavLink href="#schedule" className={styles.footerNavlink}>
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
              href="#tickets"
              className={`${styles.footerNavlink} ${styles.registerButton}`}
            >
              <span>Inscreva-se</span>
            </NavLink>
          </NavItem>
        </div>
        <div className={styles.footerSocial}>
          <ruby>
            {configValues.place}
            <rp>(</rp>
            <rt className={styles.rt}>{configValues.formattedDate}</rt>
            <rp>)</rp>
          </ruby>
        </div>
        {/* <div className={styles.footerSocial}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" color="#e1306c" />
          <a
            href="https://maps.app.goo.gl/77nVpkFsNg38qsrS6"
            target="_blank"
            rel="noreferrer"
            className={styles.linkHover}
          >
            Localização Google Maps
          </a>
        </div> */}

        <div className={styles.footerSocial}>
          <NavItem>
            <NavLink
              href="https://www.instagram.com/wtmgoiania/"
              target="_blank"
              className={`${styles.footerNavlink} ${styles.instagram}`}
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </NavLink>
          </NavItem>
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
      </Nav>
    </footer>
  );
};

export default Footer;
