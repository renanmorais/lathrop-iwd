import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'

import React, { ReactNode } from "react";
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import configValues from 'helpers/config';


import { AppLayoutProps } from '../../types';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps,
) => {
  const { Component, pageProps } = props;

  const Layout = Component.layout || (({ children }: { children: ReactNode }) => <>{children}</>);

  return (<React.Fragment>
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>);


};

export default MyApp;
