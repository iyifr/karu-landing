import { JSX, SVGProps } from "react";
import Balancer from "react-wrap-balancer";

export default function FeaturesBlocks() {
  return (
    <section>
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
        <div className="text-5xl mb-6 leading-snug inline-flex gap-3 font-block">
          <span className="text-red-400 mx-5 line-through tracking-wider font-sans">Generic CRM</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-tl from-emerald-500 to-emerald-300 font-bold mt-0.5">
            Tailored <span className="tracking-wider underline underline-offset-2 decoration-wavy">CRB✨</span>
          </span>
        </div>

        <p className="md:text-xl text-lg text-gray-600">
          <Balancer>
            CRB stands for.. (drum rolll pleaseee!!) .. Customer. Relationship. Builder.
          </Balancer>
        </p>

        <p className="text-xl text-gray-600">
          <Balancer>
            Put a face to each sale and make it count for more.
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