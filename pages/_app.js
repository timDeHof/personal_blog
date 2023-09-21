import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import { Layout } from "@/components";
function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
