import Category from "@/Components/Categories/Category";
import { useRouter } from "next/router";
import React from "react";

export default function Categories({ product }) {
  console.log(product);
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-32">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Featured {product[0]?.category}
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            BuildYourBeast offers a wide array of cutting-edge PC components
            carefully curated to elevate your computing experience.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {product?.map((product) => {
            return (
              <>
                <Category categories={product} key={product._id} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/all-pc-components/");
  const data = await res.json();
  const paths = data?.map((category) => ({
    params: { categoryId: category.category },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/featured/${params.categoryId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
