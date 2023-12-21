import "../styles/globals.css";
import React, { ReactNode } from "react";
import { NextComponentType } from "next";
import type { AppContext, AppInitialProps } from "next/app";
import { AppLayoutProps } from "../../types";
import Maintenance from "./maintenance";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps
) => {
  const isMaintenanceMode = true;

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  const { Component, pageProps } = props;

  const Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>);

  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default MyApp;
