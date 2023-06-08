import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex-col-reverse flex justify-left md:flex-row">
          <div className="space-y-2 md:space-y-4 pt-16 md:pt-0 md:pr-16">
            <p className="uppercase tracking-[0.2em] text-xs text-center md:text-left">
              {" "}
              Hey there! I'm
            </p>
            <h1 className="md:text-left text-6xl md:text-8xl italic font-black text-center">
              Shubham Patil
            </h1>
            <p className="max-w-xl md:text-left text-center prose prose-a:text-sky-600 text-paragraph">
              I'm a
              {" " +
                (new Date(
                  Date.now() - new Date("29 September 2007").getTime()
                ).getFullYear() -
                  1970) +
                " "}
              year old student and fullstack developer based in the Bay Area. I
              like to learn by making projects, and I have numerous on my GitHub
              profile. Currently I'm building{" "}
              <a
                href="https://tripley.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tripley
              </a>
              , a travel app that helps you manage and plan your trips with
              ease.
            </p>
          </div>
          {/* <Image
            src="https://avatars.githubusercontent.com/u/55328098?v=4"
            width={150}
            height={150}
            layout="intrinsic"
            placeholder="blur"
            blurDataURL="https://avatars.githubusercontent.com/u/55328098?v=4"
            className="rounded-full"
          /> */}
        </div>
        {/* <div className="flex space-x-4">
          <Link href="https://github.com/ShubhamPatilsd">
            <p className="font-monospace text-accent hover:underline cursor-pointer">
              GitHub
            </p>
          </Link>

          <Link href="https://www.linkedin.com/in/shubham-patil-5352a3215/">
            <p className="font-monospace text-accent hover:underline cursor-pointer">
              LinkedIn
            </p>
          </Link>
          <Link href="mailto:shubhampatilsd@gmail.com">
            <p className="font-monospace text-accent hover:underline cursor-pointer">
              Email
            </p>
          </Link>
          <Link href="https://twitter.com/ShubhamPatilsd">
            <p className="font-monospace text-accent hover:underline cursor-pointer">
              Twitter
            </p>
          </Link>
        </div> */}
      </div>
    </>
  );
};
