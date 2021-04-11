import React from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import Router from "next/router";
import Head from "next/head";
import i18n from "i18n";
import { ThemeProvider } from "@material-ui/core/styles";

import store from "redux/store";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "src/theme";
import "scss/styles.scss";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
