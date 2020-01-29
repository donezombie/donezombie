import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../store'
import Layout from '../components/Layout';
import theme from '../src/theme';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render () {
    console.log(theme)
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Layout>
          <ThemeProvider theme={theme}>
            <Head>
              <link rel="shortcut icon" type="image/png" href="static/favicon.ico"/>
              <title>Pham Phu Quy Don - DZB </title>
            </Head>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))