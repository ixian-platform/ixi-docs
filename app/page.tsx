import Image from "next/image"
import syncAlt from "@/public/icons/sync_alt.svg"
import ixiLogo from "@/public/ixi-logotype.svg"

import CustomCard from "@/components/CustomCard/CustomCard"
import TextElement from "@/components/TextElement/TextElement"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8 gap-16 max-[425px]:gap-8">
      <div className="flex flex-col items-center gap-2 max-[425px]:items-start max-[425px]:text-left">
        <Image src={ixiLogo} alt={"ixian-logo"} className="max-sm:max-w-40" />
        <TextElement type={"heading-xs"}>
          Welcome to Ixian Documentation page.
        </TextElement>
        <TextElement type={"body-sm"}>
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
          icon={<Image src={syncAlt} alt={"sync_alt"} />}
          href="/docs/tech-docs"
        />
        <CustomCard
          title="API Documentation"
          description="Find all the information that is needed for seamless integration with Ixian."
          href="/docs/api-docs"
          icon={<Image src={syncAlt} alt={"sync_alt"} />}
        />
        <CustomCard
          title="SDK Demos"
          description="Learn how to build your next app on Ixian. Browse through our SDK Demos and get up and running with Ixian."
          href="/docs/sdk-demos"
          icon={<Image src={syncAlt} alt={"sync_alt"} />}
        />
        <CustomCard
          title="Guides"
          description="Learn how to setup and use  Ixian DLT node  on different operating systems."
          href="/docs/guides"
          icon={<Image src={syncAlt} alt={"sync_alt"} />}
        />
      </div>
    </div>
  )
}
