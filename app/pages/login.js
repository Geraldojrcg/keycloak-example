import { useKeycloak } from "@react-keycloak/ssr";
import { useEffect } from "react";
import Router from "next/router";

function loginPage() {
  const { initialized, keycloak } = useKeycloak();
  const { authenticated, login = () => {} } = keycloak || {};

  useEffect(() => {
    if (!initialized) return;
    if (!authenticated) {
      login();
    } else {
      Router.replace("/");
    }
  }, [initialized, authenticated]);

  return <div></div>;
}

export default loginPage;
