import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart({ allProduct }) {
  const { productName, price, averageRating, status, image, _id, category } =
    allProduct;
  return (
    <>
      <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href={`/products/${_id}`}
        >
          <Image
            width={500}
            height={500}
            class="object-cover w-full"
            src={image}
            alt="product image"
          />
        </Link>
        <div class="mt-4 px-5 pb-5">
          <Link href={`/products/${_id}`}>
            <h5 class="text-xl tracking-tight text-slate-900 font-bold mb-3">
              {productName}
            </h5>
          </Link>

          <p class="text-lg pb-2 font-normal text-slate-900">
            Category: {category}
          </p>

          <p class="text-lg  font-normal text-slate-900">Status: {status}</p>

          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">${price}</span>
            </p>
            <div class="flex items-center">
              <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {averageRating}
              </span>
            </div>
          </div>
          <button class="flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Add To Builder
          </button>
        </div>
      </div>
    </>
  );
}
