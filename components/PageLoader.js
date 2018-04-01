import React from "react";
import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div>
    <Head>
      {/* Import CSS for nprogress */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/css/ngprogress.css"
      />
    </Head>
  </div>
);
