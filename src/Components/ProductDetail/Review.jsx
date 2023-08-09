import Image from "next/image";
import React from "react";

export default function Review({ reviews, averageRating }) {
  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex flex-col justify-center w-full gap-5 items-center">
          <p className="text-3xl lg:text-4xl text-center font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white ">
          Customer  Reviews
          </p>
          <p className="font-bold text-lg">Average Rating: {averageRating}</p>
        </div>
        {reviews.map((review) => {
          const { Rating, Comment, Name } = review;
          return (
            <>
              <div className="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 p-8">
                <div className="md:block">
                  <div className="hidden md:flex mt-6 flex-row justify-start items-start space-x-4"></div>
                  <div
                    className="md:hidden carousel pt-8 cursor-none"
                    data-flickity='{ "wrapAround": true,"pageDots": false }'
                  ></div>
                  <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                    <div>
                      <Image
                        width={50}
                        height={50}
                        src={"https://i.ibb.co/FVmB0ng/20220621-170404-01.jpg"}
                        alt="girl-avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                      <p className="text-base font-medium leading-none text-gray-800 dark:text-white">
                        {Name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 md:px-8">
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-row justify-between items-start"></div>
                    <div className="cursor-pointer mt-2 md:mt-0">{Rating}</div>
                  </div>
                  <div className="hidden md:block">
                    <p className="mt-1 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">
                      {Comment}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
