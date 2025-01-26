import Image from "next/image"
import logotypeMonoLight from "@/public/ixi-logotype-mono-lm.svg"
import logotypeMono from "@/public/ixi-logotype-mono.svg"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

import CustomCard from "@/components/CustomCard/CustomCard"
import TextElement from "@/components/TextElement/TextElement"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8 gap-16 max-[425px]:gap-8">
      <div className="flex flex-col items-center gap-2 max-[425px]:items-start max-[425px]:text-left">
        <Image
          src={logotypeMono}
          priority
          alt={"ixian-logo"}
          height={40}
          className="max-sm:max-w-40 mb-5 hidden dark:block"
        />
        <Image
          src={logotypeMonoLight}
          priority
          alt={"ixian-logo"}
          height={40}
          className="max-sm:max-w-40 mb-5 block dark:hidden"
        />
        <TextElement type={"heading-lg"}>
          Welcome to Ixian Documentation page.
        </TextElement>
        <TextElement type={"body-lg"}>
          Learn how you can leverage Ixian technology to build enterprise level
          services.
        </TextElement>
      </div>
      <div className="homeCardGrid">
        <CustomCard
          title="Technical Documents"
          description={
            "Get yourself familiar with the technical aspects of Ixian technology. Learn more about the Cryptographic primitives, data formats and more."
          }
          icon={<IoArrowForwardCircleOutline size={48} />}
          href="/docs/tech-docs"
        />
        <CustomCard
          title="API Documentation"
          description="Find all the information that is needed for seamless integration with Ixian."
          href="/docs/api-docs"
          icon={<IoArrowForwardCircleOutline size={48} />}
        />
        <CustomCard
          title="SDK Demos"
          description="Learn how to build your next app on Ixian. Browse through our SDK Demos and get up and running with Ixian."
          href="/docs/sdk-demos"
          icon={<IoArrowForwardCircleOutline size={48} />}
        />
        <CustomCard
          title="Guides"
          description="Learn how to setup and use  Ixian DLT node  on different operating systems."
          href="/docs/guides"
          icon={<IoArrowForwardCircleOutline size={48} />}
        />
      </div>
    </div>
  )
}
