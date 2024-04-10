import Link from "next/link";

export default function Header() {
  return (
    <div className="flex fixed w-full top-0 left-0 right-0 bg-red-300 py-4 px-12 md: px-6; sm: px-4;">
      <Link href="/">Lavosbit</Link>
      <div className="px-1 w-full max-w-full" />
      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
