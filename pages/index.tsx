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
import { ScrollDown } from "../components/ScrollDown";
import { About } from "../components/About";
import { WorkExperience } from "../components/WorkExperience/WorkExperience";
import axios from "axios";
import Flickr from "flickr-sdk";
import { Awards } from "../components/Awards/Awards";

interface SanityProjectProps {
  projects: Result[];
  photos: string[];
}

const Home: NextPage<SanityProjectProps> = ({ projects, photos }) => {
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
        {/* <div className="z-0">
          <img
            className="z-0  right-[10%] top-0 select-none ease-in-out duration-700 absolute"
            src="/Vectorblobblue.svg"
          />
          <img
            className="z-0  left-1/4 bottom-1/4 select-none absolute"
            src="/Vectorblobpurple.svg"
          />
        </div> */}

        {/* <div className="h-screen z-0 bg-[url('https://tailwindui.com/img/beams-home@95.jpg)]"> */}
        <img
          className="z-0 opacity-50 select-none w-screen absolute h-screen z-[-99999]"
          src="/beambackground.jpg"
        />
        {/* <img
            className="z-0  left-1/4 bottom-1/4 select-none absolute"
            src="/Vectorblobpurple.svg"
          /> */}
        {/* </div> */}

        <div className="md:justify-center relative z-99 p-8 md:py-[6.25rem] md:px-[8rem]">
          <div className="space-y-16">
            <div className="flex justify-center h-[75vh] items-center ">
              <Hero />
            </div>

            <div className="flex justify-center">
              <ScrollDown />
            </div>
            <div className="max-w-7xl mx-auto">
              <About />
            </div>
            <div className="max-w-7xl mx-auto flex justify-center">
              <WorkExperience />
            </div>

            <div className="max-w-7xl mx-auto flex justify-center">
              <Awards />
            </div>
            <div className="max-w-7xl mx-auto">
              <Projects projects={projects} />
            </div>
            {/* 
            <div className="max-w-7xl mx-auto">
              <Current />
            </div> */}

            <div className="max-w-7xl mx-auto">
              <Before />
            </div>
            <div className="max-w-7xl mx-auto">
              <Photos photos={photos} />
            </div>

            <div className="max-w-7xl mx-auto">
              <Blog />
            </div>

            <Footer />
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
  const flickr = new Flickr(process.env.FLICKR_API_KEY);

  // const res = await axios.get(
  //   "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.flickr.com%2Fservices%2Ffeeds%2Fphotos_public.gne%3Fid%3D195755423%40N04"
  // );

  // console.log(res.data.items);

  // const photoUrls = res.data.items.map((item: any) => item.enclosure.link);

  // console.log(photoUrls)

  const { body } = await flickr.people.getPublicPhotos({
    user_id: "195755423@N04",
  });
  console.log(body.photos.photo);

  const photoUrls = body.photos.photo.map(
    (photo: any) =>
      `https://live.staticflickr.com/${"65535"}/${photo.id}_${
        photo.secret
      }_${"q"}.jpg`
  );

  // It's important to default the slug so that it doesn't return "undefined"
  const projects = await client.fetch(
    `
    *[_type == "project"] | order(order asc)
  `
  );
  return {
    props: {
      projects,
      photos: photoUrls,
    },
  };
};

export default Home;
