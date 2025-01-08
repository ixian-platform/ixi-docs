import Image from "next/image"
import Link from "next/link"

import { Settings } from "@/lib/meta"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
      />
      <h1 className="text-xl font-semibold">{Settings.title}</h1>
    </Link>
  )
}
