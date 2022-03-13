import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex md:justify-center p-12 md:p-4">
        <div className="flex-col-reverse flex justify-center md:flex-row items-center">
          <div className="space-y-4 md:pr-16">
            <h1 className="md:text-left text-center">Shubham Patil</h1>
            <p className="max-w-2xl md:text-left text-center">
              Hey there! I'm Shubham Patil, programmer by night and high
              schooler by day. I'm a fullstack developer who especially loves
              building awesome things with code! I also have a blog and a
              YouTube channel where I talk about tech! At the moment, coding is
              a hobby of mine, but I wish to expand it into a career.
            </p>
          </div>
          <Image
            src="https://avatars.githubusercontent.com/u/55328098?v=4"
            width={150}
            height={150}
            layout="fixed"
            placeholder="blur"
            blurDataURL="https://avatars.githubusercontent.com/u/55328098?v=4"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
