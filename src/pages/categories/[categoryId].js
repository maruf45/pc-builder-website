import { useRouter } from "next/router";
import React from "react";

export default function Categories() {
  const router = useRouter();
  console.log(router.query.categoryId);
  return <div>categories </div>;
}

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/featured/${params.productId}`);
//   const data = await res.json();
//   return {
//     props: {
//       productDetails: data,
//     },
//   };
// };
