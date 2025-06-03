import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-orange-200 flex justify-between w-full">
        <div>
          <h1 className="text-3xl font-bold text-orange-500 p-5">FayPro</h1>
        </div>

        <div className="space-x-6 font-medium p-5 lg:text-2xl mr-10">
          <a href="/" className="hover:text-orange-500">
            Home
          </a>

          <a href="/blog" className="hover:text-orange-500">
            Blog
          </a>

          <a href="/about" className="hover:text-orange-500">
            About
          </a>

          <a href="/contact "className="hover:text-orange-500">Contact</a>
        </div>
      </nav>
    </>
  );
}
