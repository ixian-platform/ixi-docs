import { ReactNode } from "react"
import Link from "next/link"
import classNames from "classnames"

import TextElement from "@/components/TextElement/TextElement"

import classes from "./CustomCard.module.scss"

interface CustomCardProps {
  title: string
  description: string
  icon: ReactNode
  href?: string
  targetBlank?: boolean
  linkClassName?: string
  className?: string
}

const CustomCard = ({
  title,
  description,
  icon,
  href,
  targetBlank,
  linkClassName,
  className,
}: CustomCardProps) => {
  const content = (
    <section className={classNames(classes.customCard, className)}>
      <div className={classes.icon}>{icon}</div>
      <TextElement as={"h1"} type={"heading-xs"}>
        {title}
      </TextElement>
      <TextElement type={"body-sm"}>{description}</TextElement>
    </section>
  )

  return href ? (
    <Link
      className={classNames(classes.link, linkClassName)}
      href={href}
      target={targetBlank ? "_blank" : "_self"}
    >
      {content}
    </Link>
  ) : (
    content
  )
}

export default CustomCard
