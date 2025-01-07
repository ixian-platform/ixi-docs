import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"

import { Company } from "@/lib/meta"

import classes from "./navigation.module.scss"

export function Footer() {
  return (
    <footer className={classNames("w-full h-16 border-t", classes.navbar)}>
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        {Company.branding !== false && (
          <div className="text-center hidden md:block">
            <Link
              className="font-semibold"
              href="https://www.rubixstudios.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.svg"
                alt="Rubix Studios Logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        )}
      </div>
    </footer>
  )
}
