import Review from "@/Components/ProductDetail/Review";
import Head from "next/head";
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
    keyFeatures,
    reviews,
  } = productDetails;
  let keyFeaturesKeys = Object.keys(keyFeatures);
  let keyFeaturesValues = Object.values(keyFeatures);

  return (
    <div>
      <Head>
        <title>{category} Product</title>
      </Head>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={image}
              width={700}
              height={700}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category: {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600">Reviews: {reviews.length}</span>
                </span>

                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <p>Status: {status}</p>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <p className="mt-3 font-bold text-lg">Specification </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div>
                  {keyFeaturesKeys.map((keys) => {
                    return (
                      <>
                        <p>{keys}: </p>
                      </>
                    );
                  })}
                </div>
                <div className="flex ml-6 items-center">
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
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add To Builder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review reviews={reviews} averageRating={averageRating} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://buildyourbeast-backend.vercel.app/all-pc-components/");
  const data = await res.json();
  const paths = data?.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://buildyourbeast-backend.vercel.app/all-pc-components/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      productDetails: data,
    },
  };
};
