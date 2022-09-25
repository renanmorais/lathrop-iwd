import React, { ReactNode } from "react";
import Head from 'next/head'
// reactstrap components
import { Container } from "reactstrap";
import Footer from '../components/footers/footer'
import NavbarHome from '../components/navbar/home-navbar'

interface BaseLayout {
    children: ReactNode;
}
//id="base-layout" className="main-content"
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {

    return (
        <>
            <main className="absolute-position">
                <NavbarHome />
                <div >
                    {children}
                </div>
                < Footer />
            </main>
        </>
    );
}



export default BaseLayout;
