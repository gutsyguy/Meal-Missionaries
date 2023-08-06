import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-40">
    <footer className="flex flex-col justify-center items-center max-w-5xl mx-auto w-full ">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-5xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 px-2">
        <div className="flex flex-col space-y-4 ">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition"
          >
            Home
          </Link>
          
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition"
          >
            Connect
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition"
          >
            All rights protected @2023
          </Link>
        </div>
      </div>
    </footer>
    </div>
  );
}