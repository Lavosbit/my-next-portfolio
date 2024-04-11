import Link from "next/link";

export default function Header() {
  return (
    <div className="flex fixed top-6 rounded-full left-1/2 -translate-x-1/2 w-[800px] backdrop-blur-md py-4 px-4 md:px-12 justify-between bg-white shadow-xl shadow-blue-300/15">
      <h1>
        <Link href="/">Jacob Galito | Senior Designer</Link>
      </h1>

      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
