import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Blog } from "../components/Blog";
import { client } from "../util/client";
import { Result } from "../types/sanityTypes";
import { Projects } from "../components/Projects/Projects";

interface SanityProjectProps {
  projects: Result[];
}

const Home: NextPage<SanityProjectProps> = ({ projects }) => {
  return (
    <>
      <Navbar />
      <div className="flex md:justify-center p-12 md:p-4">
        <div className="space-y-16">
          <Hero />
          <Projects projects={projects} />
          <Blog />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const projects = await client.fetch(
    `
    *[_type == "project"]
  `
  );
  console.log(projects);
  return {
    props: {
      projects,
    },
  };
};

export default Home;
