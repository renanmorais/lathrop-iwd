/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";


interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    return (
        <footer className="footer">
            <Row className="align-items-center justify-content-xl-between">
                <Col xl="6">
                    <div className="copyright text-center text-xl-left text-muted">
                        © {new Date().getFullYear()}{" "}
                        <a
                            className="font-weight-bold ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {name}
                        </a>
                    </div>
                </Col>

                <Col xl="6">
                    <Nav className="nav-footer justify-content-center justify-content-xl-end">
                        <NavItem>
                            <NavLink
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {name}
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="#about-us"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Sobre nós
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="#code"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Código de conduta
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
