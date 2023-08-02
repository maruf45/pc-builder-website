import { Inter } from "next/font/google";
import RootLayouts from "@/Components/Layouts/RootLayouts";
import Home from "@/Components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
    <Home/>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
