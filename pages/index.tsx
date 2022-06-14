import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Blog } from "../components/Blog";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex md:justify-center p-12 md:p-4">
        <div className="space-y-16">
          <Hero />
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Home;
