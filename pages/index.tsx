import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex md:justify-center p-12 md:p-4">
        <div className="space-y-16">
          <Hero />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Home;
