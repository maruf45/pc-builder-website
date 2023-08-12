import AllComponents from "@/Components/AllComponents/AllComponents";
import Head from "next/head";
import React from "react";

export default function AllComponent({ product }) {
  return (
    <div>
      <Head>
        <title>Our All Components</title>
      </Head>
      <AllComponents product={product} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`https://buildyourbeast-backend.vercel.app/all-categories`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
