import Image from "next/image"
import Link from "next/link"
import ixiSmallDark from "@/public/ixi-small-dark.svg"
import ixiSmallLight from "@/public/ixi-small-light.svg"
import { sitename } from "@/settings/settings"

import { Settings } from "@/lib/meta"

interface LogoProps {
  isSidebar?: boolean
}

export function Logo({ isSidebar }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-1">
      {isSidebar ? (
        <>
          <Image
            src={ixiSmallDark}
            priority
            alt={"ixi-logo"}
            height={32}
            className="hidden dark:block"
            decoding="async"
          />
          <Image
            src={ixiSmallLight}
            priority
            alt={"ixi-logo"}
            height={32}
            className="dark:hidden"
            decoding="async"
          />
        </>
      ) : (
        <Image
          src={Settings.siteicon}
          alt={`${sitename} main logo`}
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        />
      )}
      <h1 className="text-xl font-semibold">{sitename}</h1>
    </Link>
  )
}
