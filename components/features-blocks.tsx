import { JSX, SVGProps } from "react";
import Balancer from "react-wrap-balancer";

export default function FeaturesBlocks() {
  return (
    <section>
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
        <div className="lg:text-5xl text-3xl px-4 mb-6 leading-snug flex flex-col gap-3 font-block">
          <span className="text-red-400 mx-5 tracking-wider decoration-slice font-inter line-through decoration-solid lg:text-4xl">Generic overpriced CRM👎🏾❌</span>
          <span>
            <span className="tracking-wider underline underline-offset-2 decoration-wavy bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 font-bold mt-0.5">Customer Relationship Builder</span>
            ✨💚
          </span>
        </div>

        <p className="md:text-xl text-lg text-gray-600">
          <Balancer>
            The
            <span className="font-bold text-green-400 ml-1.5">C</span>ustomer
            <span className="font-bold text-green-400 ml-1.5">R</span>elationship
            <span className=" font-bold text-green-500 ml-1.5">B</span>uilder
            that gets you results.
          </Balancer>
        </p>

        <p className="text-xl text-gray-600">
          <Balancer>
            Put a face to each purchase and make it count for more.
          </Balancer>
        </p>

      </div>

    </section>
  )
}

export const EmojioneV1WhiteHeavyCheckMark = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#37b34a" d="M63.792 56.915a6.876 6.876 0 0 1-6.875 6.876H6.875A6.876 6.876 0 0 1 0 56.915V6.875A6.878 6.878 0 0 1 6.875 0h50.042a6.877 6.877 0 0 1 6.875 6.875z"></path>
    <path fill="#f4f4f4" d="M53.867 14.14a4.656 4.656 0 0 0-6.562.514l-20.04 23.437l-10.781-9a4.248 4.248 0 1 0-5.447 6.519l14.444 12.06a4.223 4.223 0 0 0 3.235.946A4.654 4.654 0 0 0 31.895 47l22.483-26.3a4.659 4.659 0 0 0-.515-6.562"></path>
  </svg>
)