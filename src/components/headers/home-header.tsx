/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";


interface HomeHeaderProps {

}

const HomeHeader: React.FC<HomeHeaderProps> = ({ }) => {
    return (
        <section className="footer">
            <Row className="align-items-center justify-content-xl-between">
                <h1>DevFest Cerrado 2022</h1>
            </Row>
        </section>
    );
}

export default HomeHeader;
