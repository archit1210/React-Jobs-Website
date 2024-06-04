//import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListing from "../components/JobsListing";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListing isHome="true" />
      <ViewAll />
    </>
  );
};

export default HomePage;
