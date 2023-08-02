import RootLayouts from "@/Components/Layouts/RootLayouts";
import { signIn } from "next-auth/react";
import React from "react";

export default function SignIn() {
  return (
    <section className="py-1 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Welcome To BuildYourBeast!
          </h2>
        </div>
        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white shadow-cyan-500/50 rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div>
                <div className="space-y-5">
                  <div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <button className="block w-full py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                        Google
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className=" mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <button
                        onClick={() => signIn("github")}
                        className="block w-full py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      >
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
