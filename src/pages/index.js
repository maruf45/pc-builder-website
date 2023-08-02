import { Inter } from "next/font/google";
import RootLayouts from "@/Components/Layouts/RootLayouts";
import Home from "@/Components/Home/Home";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Head>
        <title>Welcome to | Home Page</title>
      </Head>
    <Home/>
    </div>
  );
}