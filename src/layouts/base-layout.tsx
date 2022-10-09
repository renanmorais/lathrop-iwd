import React, { ReactNode } from "react";
import Head from 'next/head'
// reactstrap components
import { Container } from "reactstrap";
import Footer from '../components/footers/footer'
import NavbarHome from '../components/navbar/home-navbar'
import configValues from "helpers/config";

interface BaseLayout {
    children: ReactNode;
}
//id="base-layout" className="main-content"
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta property="og:image" content="https://www.devfestcerrado.com.br/og.png" />
                <meta property="og:image:secure_url" content="https://www.devfestcerrado.com.br/og.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <title>{configValues.name}</title>
            </Head>
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
