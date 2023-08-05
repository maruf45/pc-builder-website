import { signOut, useSession } from "next-auth/react";
import "flowbite";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data } = useSession();
  const routes = [
    {
      name: "CPU",
      route: "/Processors",
    },
    {
      name: "Motherboard",
      route: "/Motherboards",
    },
    {
      name: "RAM",
      route: "/Memory",
    },
    {
      name: "Power Supply Unit",
      route: "/Power Supplies",
    },
    {
      name: "Storage Device",
      route: "/Storage",
    },
    {
      name: "Monitor",
      route: "/Monitors",
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <header className=" bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <p className="font-bold text-xl w-full h-8">BuildYourBeast</p>
                </Link>
              </div>

              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <Link
                  href="/"
                  title="Home"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Home
                </Link>

                <div
                  id="dropdownDelayButton"
                  data-dropdown-toggle="dropdownDelay"
                  data-dropdown-delay="500"
                  data-dropdown-trigger="hover"
                  className="flex items-center"
                >
                  <a
                    href="#"
                    className="text-base text-black transition-all duration-200 hover:text-opacity-80 relative"
                  >
                    Categories
                  </a>
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                  <div
                    id="dropdownDelay"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      {routes.map((route) => {
                        return (
                          <>
                            <li>
                              <Link
                                href={`/categories/${route.route}`}
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                {route.name}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <Link
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  PC Builder Page
                </Link>
              </div>

              {data?.user?.email ? (
                <button
                  href="/sign-in"
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/sign-in"
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

        </header>
      </div>
    </div>
  );
}
