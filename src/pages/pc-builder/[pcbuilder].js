import PCBuilderComponent from "@/Components/PCBuilderComponents/PCBuilderComponents";

export default function PcBuilderComponents({pcBuilder}) {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-32">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Our Featured {pcBuilder[0]?.category}
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          BuildYourBeast offers a wide array of cutting-edge PC components
          carefully curated to elevate your computing experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pcBuilder?.map((pcBuilder) => {
          return (
            <>
              <PCBuilderComponent pcBuilder={pcBuilder} key={pcBuilder._id} />
            </>
          );
        })}
      </div>
    </div>
  </section>
  );
}

export const getServerSideProps = async (context) => {
    const {params} = context;
    const res = await fetch(
        `https://buildyourbeast-backend.vercel.app/categories/${params.pcbuilder}`
      );
      const data = await res.json();
      console.log(params);
    return{
        props: {
            pcBuilder: data
        }
    }
}