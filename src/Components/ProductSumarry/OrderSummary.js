import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const { pcComponents } = useSelector((state) => state.pcBuilder);
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          PC Builder Page <span>&#8226;</span>
        </h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Your Selected Components
            </p>
            {pcComponents
              ? pcComponents === undefined
              : "No components Are selected"}
            {pcComponents?.map((pcComponents) => {
              const {
                productName,
                price,
                averageRating,
                status,
                image,
                _id,
                category,
              } = pcComponents;
              return (
                <>
                  <div
                    key={_id}
                    className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                  >
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      <Image
                        className="w-full hidden md:block"
                        src={image}
                        width={320}
                        height={320}
                        alt="pc components"
                      />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-3">
                          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                            {productName}
                          </h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className=" text-gray-600">Rating:</span>{" "}
                              {averageRating}
                            </p>
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className=" text-gray-600">Available:</span>{" "}
                              {status}
                            </p>
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className=" text-gray-600">Category: </span>{" "}
                              {category}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                          ${price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                My PC Build
              </h3>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                      PC Component
                      <br />
                      <span className="font-normal">
                        If your all done then hit Complete build button
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button disabled={pcComponents ? pcComponents.length < 5: disabled} className="disabled:cursor-not-allowed disabled:opacity-70 hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                  Complete Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
