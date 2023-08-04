import Review from "@/Components/ProductDetail/Review";
import Image from "next/image";
import React from "react";

export default function ProductDetailPage({ productDetails }) {
  const {
    productName,
    price,
    status,
    image,
    description,
    category,
    averageRating,
    individualRating,
    keyFeatures,
    reviews,
  } = productDetails;
  let keyFeaturesKeys = Object.keys(keyFeatures);
  let keyFeaturesValues = Object.values(keyFeatures);

  return (
    <>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={image}
              width={700}
              height={700}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Category: {category}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {productName}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <span class="text-gray-600">Reviews: {reviews.length}</span>
                </span>

                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <p>Status: {status}</p>
                </span>
              </div>
              <p class="leading-relaxed">{description}</p>
              <p class="mt-3 font-bold text-lg">Specification </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div>
                  {keyFeaturesKeys.map((keys) => {
                    return (
                      <>
                        <p>{keys}: </p>
                      </>
                    );
                  })}
                </div>
                <div class="flex ml-6 items-center">
                  <div>
                    {keyFeaturesValues.map((keys) => {
                      return (
                        <>
                          <p>{keys}</p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add This
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review reviews={reviews} averageRating={averageRating} />
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/all-pc-components/");
  const data = await res.json();
  const paths = data?.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/all-pc-components/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      productDetails: data,
    },
  };
};
