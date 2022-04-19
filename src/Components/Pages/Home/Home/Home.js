import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Home = () => {
  toast.dismiss("loading1");
  return (
    <>
      <PageTitle title={"home"}></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <div id="expert">
        <Experts></Experts>
      </div>
    </>
  );
};

export default Home;
