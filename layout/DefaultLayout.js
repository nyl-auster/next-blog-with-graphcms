import React from "react";
import Navigation from "../components/Navigation";
import Head from "next/head";
import PageLoader from "../components/PageLoader";
import Header from "../components/Header";

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="default-layout">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
          <link rel="stylesheet" href="/static/css/bulma.css" />
        </Head>
        <PageLoader />
        <Navigation />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
