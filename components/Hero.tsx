import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex md:justify-center p-12 md:p-4">
      <div className="flex-col-reverse flex justify-center md:flex-row items-center">
        <div className="space-y-2 md:space-y-4 pt-16 md:pt-0 md:pr-16">
          <p className="uppercase tracking-[0.2em] text-xs text-center md:text-left">
            {" "}
            Hey there! I'm
          </p>
          <h1 className="md:text-left text-center">Shubham Patil</h1>
          <p className="max-w-2xl md:text-left text-center">
            Programmer by night and high schooler by day. I'm a fullstack
            developer who especially loves building awesome things with code! I
            also have a blog and a YouTube channel where I talk about tech as
            well. At the moment, coding is a hobby of mine, but I'm intent on
            expanding it into a career in the future!
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
  );
};
