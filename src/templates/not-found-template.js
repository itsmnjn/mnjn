// @flow strict
import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Uh oh...">
        <p>Unfortunately this route does not exist. Try again?</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
