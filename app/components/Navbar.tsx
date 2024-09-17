import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-10 p-6">
      <div className="container flex justify-between items-center">
        <div className="text-black text-2xl font-bold">MyPortfolio</div>
        <ul className="flex space-x-6 text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
