import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"

import Copyright from "@/components/Copyright/Copyright"
import TextElement from "@/components/TextElement/TextElement"

import classes from "./navigation.module.scss"

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="flex justify-between gap-2 pb-16 max-md:flex-col max-md:pb-5 max-sm:gap-6">
        <div className="flex flex-col gap-2 max-w-sm">
          <div className="flex gap-1 items-center">
            <Image src={logo} alt={"logo"} />
            <TextElement type={"heading-xs"}>ixidocs</TextElement>
          </div>
          <div className="flex flex-col gap-2">
            <TextElement type={"label-md"}>
              The official documentation pages for the Ixian Platform.
            </TextElement>
            <TextElement className={classes.grayText} type={"label-md"}>
              Managed by Ixian.
            </TextElement>
          </div>
        </div>
        <div className="w-full max-w-44">
          <TextElement className={classes.grayText} type={"label-sm"}>
            Links
          </TextElement>
          <div className="flex flex-col gap-2 mt-10 max-sm:mt-4">
            <Link href={"https://www.ixian.io/"} target={"_blank"}>
              <TextElement type={"label-sm"}>Ixian</TextElement>
            </Link>
            <Link href={"https://explorer.ixian.io/"} target={"_blank"}>
              <TextElement type={"label-sm"}>ixiscope</TextElement>
            </Link>
            <Link href={"https://github.com/ProjectIxian"} target={"_blank"}>
              <TextElement type={"label-sm"}>GitHub</TextElement>
            </Link>
            <Link href={" https://www.spixi.io/"} target={"_blank"}>
              <TextElement type={"label-sm"}>Spixi</TextElement>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between border-t border-gray-600 pt-2 flex-wrap max-sm:flex-col-reverse max-sm:gap-4">
        <Copyright />
        <div className="flex gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:justify-between">
          <Link href={"/terms"}>
            <TextElement type={"label-sm"}>Terms of Use</TextElement>
          </Link>
          <Link href={"/terms"}>
            <TextElement type={"label-sm"}>Privacy Policy</TextElement>
          </Link>
          <Link href={"/terms"}>
            <TextElement type={"label-sm"}>Cookies</TextElement>
          </Link>
          <Link href={"/terms"}>
            <TextElement type={"label-sm"}>MIT License</TextElement>
          </Link>
        </div>
      </div>
    </footer>
  )
}
