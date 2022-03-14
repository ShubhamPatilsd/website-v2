import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="py-2 px-10 mb-10 flex items-center justify-between">
      <Image src="/logo.svg" width={60} height={60} />
      <div className="flex text-white text-[25px] space-x-6">
        <a
          href="https://github.com/ShubhamPatilsd"
          className="transition hover:text-paragraph"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-patil-5352a3215/"
          className="transition hover:text-paragraph"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://twitter.com/ShubhamPatilsd"
          className="transition hover:text-paragraph"
        >
          <FiTwitter />
        </a>
        <a
          href="mailto:shubhampatilsd@gmail.com"
          className="transition hover:text-paragraph"
        >
          <FiMail />
        </a>
      </div>
    </nav>
  );
};
