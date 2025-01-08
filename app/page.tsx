import Image from "next/image"
import syncAlt from "@/public/icons/sync_alt.svg"

import CustomCard from "@/components/CustomCard/CustomCard"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">IXI DOCS</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Learn how you can leverage Ixian technology to build enterprise level
        services.
      </p>
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
