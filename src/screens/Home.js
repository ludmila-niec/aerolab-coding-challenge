import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Products />
      </Layout>
    </>
  );
};

export default Home;
