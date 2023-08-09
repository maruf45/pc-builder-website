import { addPcComponents } from "@/redux/PCBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function Cart({ allProduct }) {
  const { productName, price, averageRating, status, image, _id, category } =
    allProduct;
  const dispatch = useDispatch();
  return (
    <>
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href={`/products/${_id}`}
        >
          <Image
            width={500}
            height={500}
            className="object-cover w-full"
            src={image}
            alt="product image"
          />
        </Link>
        <div className="mt-4 px-5 pb-5">
          <Link href={`/products/${_id}`}>
            <h5 className="text-xl tracking-tight text-slate-900 font-bold mb-3">
              {productName}
            </h5>
          </Link>

          <p className="text-lg pb-2 font-normal text-slate-900">
            Category: {category}
          </p>

          <p className="text-lg  font-normal text-slate-900">
            Status: {status}
          </p>

          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
            </p>
            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {averageRating}
              </span>
            </div>
          </div>
          <button
            onClick={() => dispatch(addPcComponents(allProduct))}
            className="flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add To Builder
          </button>
        </div>
      </div>
    </>
  );
}
