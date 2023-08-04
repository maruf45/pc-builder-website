import React from "react";
import Cart from "./Cart";

export default function AllCart({ allProducts }) {
  console.log(allProducts);
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-32">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Featured Product
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            BuildYourBeast offers a wide array of cutting-edge PC components
            carefully curated to elevate your computing experience.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts?.slice(0, 6).map((allProduct) => {
            return (
              <>
                <Cart allProduct={allProduct} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
