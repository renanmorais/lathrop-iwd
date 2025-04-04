import React, { ReactNode } from "react";
import Head from "next/head";
// import NavbarHome from "../components/navbar/home-navbar";
import Footer from "../components/footers/footer";
import { Navbar } from "components/navbar/navbar";
import configValues from "helpers/config";

interface BaseLayout {
  children: ReactNode;
}
// id="base-layout" className="main-content"
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="functions-insert-dynamic-og"></meta>
        <title>{configValues.name}</title>
      </Head>
      <main className="absolute-position">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default BaseLayout;
