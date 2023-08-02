import RootLayouts from "@/Components/Layouts/RootLayouts";
import React from "react";

export default function SignIn() {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Welcome To BuildYourBeast!
          </h2>
        </div>
        <div class="relative max-w-md mx-auto mt-8 md:mt-16">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
              <div>
                <div class="space-y-5">
                  <div>
                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <button
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        class="block w-full py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      >
                        Google
                      </button>
                    </div>
                  </div>

                  <div>
                    <div class=" mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <button
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        class="block w-full py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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

SignIn.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
