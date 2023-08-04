import { Inter } from "next/font/google";
import RootLayouts from "@/Components/Layouts/RootLayouts";
import Home from "@/Components/Home/Home";
import Head from "next/head";
import AllCart from "@/Components/Cart/AllCart";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ allProducts }) {
  return (
    <div>
      <Head>
        <title>Welcome to | Home Page</title>
      </Head>
      <Home />
      <AllCart allProducts={allProducts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/all-pc-components");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
