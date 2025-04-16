import React from "react";
import Header_pager from "../components/Header_page";
import Specialitymenu from "../components/Specialitymenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header_pager />
      <Specialitymenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
