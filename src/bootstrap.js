import "../styles.css";

import NProgress from "nprogress";
import Router from "next/router";

let progressTimeout;

Router.onRouteChangeStart = () => {
  progressTimeout = window.setTimeout(NProgress.start, 400);
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
  window.clearTimeout(progressTimeout);
};

Router.onRouteChangeError = () => {
  NProgress.done();
  window.clearTimeout(progressTimeout);
};
