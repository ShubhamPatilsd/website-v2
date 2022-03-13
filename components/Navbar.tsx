import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="p-2 mb-10">
      <Image src="/logo.svg" width={60} height={60} />
    </nav>
  );
};
