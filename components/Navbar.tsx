import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { HiMail } from "react-icons/hi";

export const Navbar = () => {
  return (
    <nav className="py-2 px-10 mb-10 flex items-center justify-between">
      <Image src="/logo.svg" width={60} height={60} />
      <div className="flex text-white text-[25px] space-x-6">
        <a
          href="https://github.com/ShubhamPatilsd"
          className="transition hover:text-paragraph"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-patil-5352a3215/"
          className="transition hover:text-paragraph"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/ShubhamPatilsd"
          className="transition hover:text-paragraph"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:shubhampatilsd@gmail.com"
          className="transition hover:text-paragraph"
        >
          <HiMail />
        </a>
        <a
          href="mailto:shubhampatilsd@gmail.com"
          className="transition hover:text-paragraph"
        >
          <SiDevdotto size={26} />
        </a>
      </div>
    </nav>
  );
};
