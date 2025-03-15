import ScrollReveal from "./Animations/ScrollReveal";

export const Hero = () => {
  return (
    <>
      <div className="relative w-full h-full overflow-x-hidden space-y-4">
        <div className=" p-12">
          <h1 className="flex w-full text-center leading-[1em] text-[12vw]">
            Shubham Patil
          </h1>

          {/* text-[3.5rem] */}
          <p
            className="mt-[2rem] w-full font-light

            text-[1.7rem]
           md:text-left  bottom-[3rem] left-[3rem] text-center prose prose-a:text-sky-600"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          {/* <p className="uppercase tracking-[0.2em] text-xs text-center md:text-left">
              {" "}
              Hey there! I'm
            </p> */}

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

        {/* <p className="w-full md:text-left absolute bottom-[3rem] left-[3rem] text-center prose prose-a:text-sky-600 text-paragraph">
          I'm a
          {" " +
            (new Date(
              Date.now() - new Date("29 September 2007").getTime()
            ).getFullYear() -
              1970) +
            " "}
          year old student and fullstack developer based in the Bay Area. I like
          to learn by making projects, and I have numerous on my GitHub profile.
          Currently I'm building{" "}
          <a
            href="https://tripley.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tripley
          </a>
          , a travel app that helps you manage and plan your trips with ease.
        </p>
        
        
        */}

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
        <div className="select-none text-3xl overflow-hidden absolute -bottom-[20vh] text-right -right-[10vw]">
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⡴⠶⠞⠛⠛⠉⠉⠉⠉⠉⠉⠛⠛⠶⢦⣄⡀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣶⣾⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠈⠛⢦⡀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⢛⣩⠶⠛⠉⠀⠀⠀⣀⣤⡴⠶⠚⠛⠛⠛⠉⠛⠛⠛⢶⡟⠉⢻⡄⠀⠀⠀⠈⢻⡄
          ⠀⠀⠀⠀⠀⠀⠀⣠⡴⠟⢉⣠⠶⠋⠁⠀⠀⣠⡴⠞⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠷⡤⠾⣇⠀⠀⠀⠀⠀⣿
          ⠀⠀⠀⠀⣠⡴⠛⠁⣀⡴⠛⠁⠀⢀⣠⠶⠛⠁⠀⠀⠀⣀⣠⡤⠶⠒⠛⠛⠛⠛⠛⠶⣤⡀⠀⠀⠀⢹⡆⠀⠀⠀⠀⢸
          ⠀⢀⣴⠟⠁⠀⣠⡾⠋⠀⠀⢀⡴⠛⠁⠀⢰⠞⠳⡶⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠀⠀⠀⢈⡇⠀⠀⠀⠀⣾
          ⢴⠟⠁⠀⢀⡼⠋⠀⠀⢀⡴⠋⠀⠀⠀⣠⡾⠷⠶⠇⢀⣠⣤⠶⠖⠲⢶⣄⠀⠀⠀⠀⠀⡿⠀⠀⠀⢸⡇⠀⠀⠀⢰⡏
          ⠀⠀⠀⣰⠟⠀⠀⠀⣴⠏⠀⠀⠀⣠⠞⠉⠀⠀⣠⡶⠋⠁⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⣼⠃⠀⠀⢀⡟⠂⠀⠀⢠⡟⠀
          ⠀⢀⣼⠋⠀⠀⢀⡾⠁⠀⠀⢠⡞⠁⠀⠀⢠⡾⠁⠀⠀⠀⠀⣀⣀⣠⡾⠁⠀⠀⣠⡾⠁⠀⠀⢠⡞⠁⠀⠀⣰⠟⠀⠀
          ⠀⣾⠃⠀⢠⡟⠛⣷⠂⠀⢠⡟⠀⠀⠀⠀⢾⡀⠀⠀⠀⠀⣸⣏⣹⡏⠀⠀⣠⡾⠋⠀⠀⢀⣴⠏⠀⠀⢀⡼⠋⠀⠀⠀
          ⣸⠇⠀⠀⠈⢻⡶⠛⠀⠀⣿⠀⠀⠀⠀⠀⠈⠛⠲⠖⠚⠋⠉⠉⠉⣀⣤⠞⠋⠀⠀⢀⣴⠟⠁⠀⠀⣰⠟⠁⠀⣴⠆⠀
          ⣿⠀⠀⠀⠀⢸⡇⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠉⣀⣀⡀⣀⡴⠟⠁⠀⢀⣤⠞⠁⢀⣴⠟⠁⠀⠀
          ⣿⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠙⠳⠶⠤⣤⠤⠶⠶⠚⠋⠉⠀⠀⠀⡟⠉⠈⢻⡏⠀⠀⣀⡴⠛⠁⣠⡶⠋⠁⠀⠀⠀⠀
          ⢻⡀⠀⠀⠀⠀⠘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠶⠻⢦⣤⠟⣀⣤⠞⢋⣠⡴⠛⠁⠀⠀⠀⠀⠀⠀⠀
          ⠈⢿⣄⠀⠀⠀⠀⠀⠈⠛⠳⠶⠤⠤⠤⠤⠤⠴⠶⠒⠛⠉⠁⠀⠀⢀⣠⡴⣞⣋⣤⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠙⢷⡶⠛⠳⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣴⣾⠿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠘⣧⡀⣀⣿⠦⣤⣤⣤⣤⣤⣤⠤⠶⠶⠞⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </div>
      </div>
    </>
  );
};
