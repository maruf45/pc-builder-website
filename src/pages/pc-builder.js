import OrderSummary from "@/Components/ProductSumarry/OrderSummary";
import Head from "next/head";
import React from "react";

export default function PcBuilder() {
  return (
    <div>
      <Head>
        <title>Pc Builder Page</title>
      </Head>
      <OrderSummary />
    </div>
  );
}
