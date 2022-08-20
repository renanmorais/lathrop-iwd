import React, { ReactNode } from "react";
import Head from 'next/head'
// reactstrap components
import { Container } from "reactstrap";
import Footer from '../components/footers/footer'
import NavbarHome from '../components/navbar/home-navbar'
import configValues from 'helpers/config';

interface BaseLayout {
    children: ReactNode;
}
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {

    return (
        <>
            <NavbarHome />
            <div id="base-layout" className="main-content">
                {children}

            </div>
            <Container fluid>
                < Footer name={configValues.name} />
            </Container>
        </>
    );
}



export default BaseLayout;
