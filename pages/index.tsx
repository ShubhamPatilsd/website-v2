import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Blog } from "../components/Blog";
import { client } from "../util/client";
import { Result } from "../types/sanityTypes";
import { Projects } from "../components/Projects/Projects";
import { Current } from "../components/Updates/Current";
import { Before } from "../components/Updates/Before";
import FadeIn from "react-fade-in";
import { useEffect, useState } from "react";
import { Photos } from "../components/Photos";
import { Footer } from "../components/Footer";

interface SanityProjectProps {
  projects: Result[];
}

const Home: NextPage<SanityProjectProps> = ({ projects }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return !loading ? (
    <>
      <FadeIn>
        {/* <Navbar /> */}
        <div className="z-0">
          <img
            className="z-0 absolute right-[10%] top-0"
            src="/Vectorblobblue.svg"
          />
          <img
            className="z-0 absolute left-1/4 bottom-1/4"
            src="/Vectorblobpurple.svg"
          />
        </div>
        <div className="md:justify-center z-99 p-8 md:py-[6.25rem] md:px-[8rem]">
          <div className="space-y-16">
            <div className="flex justify-center">
              <Hero />
            </div>

            {/* <Projects projects={projects} />
            <Current />
            <Before />
            <Photos />
            <Blog />
            <Footer /> */}
          </div>
        </div>
      </FadeIn>
    </>
  ) : (
    <div className="h-screen flex justify-center items-center transition duration-150 ease-in-out">
      {" "}
      <FadeIn>
        <img src="/logo.svg" className="w-56 h-56" />
      </FadeIn>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const projects = await client.fetch(
    `
    *[_type == "project"] | order(order asc)
  `
  );
  return {
    props: {
      projects,
    },
  };
};

export default Home;
