import "../styles/globals.css";
import cookie from "cookie";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";

import { keycloakConfig } from "../config/auth";

function MyApp({ Component, pageProps, cookies }) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakConfig}
      persistor={SSRCookies(cookies)}
      initOptions={{
        onLoad: "check-sso",
      }}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  );
}

function parseCookies(req) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default MyApp;
