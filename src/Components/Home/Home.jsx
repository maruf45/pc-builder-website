import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 h-screen">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase relative z-10">
              Discover Your Power: BuildYourBeast
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Welcome to BuildYourBeast
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              At BuildYourBeast, we fuel your PC building passion.
            </p>

            <Link
              href="/categories/all-components"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-6 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Lets Build PC
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>

            <p className="mt-5 text-gray-600">
              Already joined us?{" "}
              <Link
                href="/sign-in"
                className="text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
          <div className="w-full object-cover ml-20">
            <Image
              className="w-full h-full"
              width={1900}
              height={1900}
              src="https://i.ibb.co/4dFSnj6/Background.png"
              alt="PC Components picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
