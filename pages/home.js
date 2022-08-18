import React from 'react'
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      Homepage
    </div>
  )
}

export default Home
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
