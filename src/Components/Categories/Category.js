import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ categories }) {
  const { productName, price, averageRating, status, image, _id, category } =
    categories;
  return (
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <Image
          width={500}
          height={500}
          class="object-cover w-full"
          src={image}
          alt="product image"
        />
      </a>
      <div class="mt-4 px-5 pb-5">
        <Link href="/product/1">
          <h5 class="text-xl tracking-tight text-slate-900 font-bold mb-3">
            {productName}
          </h5>
        </Link>

        <p>
          <span class="text-lg font-normal py-9 text-slate-900">
            Category: {category}
          </span>
        </p>
        <p>
          <span class="text-lg  font-normal py-9 text-slate-900">
            Status: {status}
          </span>
        </p>
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
        <Link
          href={`/products/${_id}`}
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
