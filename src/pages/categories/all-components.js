import AllComponents from "@/Components/AllComponents/AllComponents";
import React from "react";

export default function AllComponent({ product }) {
  return (
    <>
      <AllComponents product={product} />
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/all-categories`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
