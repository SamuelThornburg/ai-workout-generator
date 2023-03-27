import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 2rem;
`;

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Main>{children}</Main>
    </Layout>
  );
};

export default BaseLayout;
