import React, { ReactNode } from "react";
import Head from 'next/head'
// reactstrap components
import { Container } from "reactstrap";
import Footer from '../components/footers/footer'
import configValues from '../../config-values';

interface BaseLayout {
    children: ReactNode;
}
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {

    return (
        <>
            <div id="base-layout" className="main-content">
                {children}
                s
                fsdfs
            </div>
            <Container fluid>
                < Footer name={configValues.name} />
            </Container>
        </>
    );
}



export default BaseLayout;
