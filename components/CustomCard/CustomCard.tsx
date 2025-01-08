import { ReactNode } from "react"
import Link from "next/link"

import TextElement from "@/components/TextElement/TextElement"

import classes from "./CustomCard.module.scss"

interface CustomCardProps {
  title: string
  description: string
  icon: ReactNode
  href?: string
}

const CustomCard = ({ title, description, icon, href }: CustomCardProps) => {
  const content = (
    <section className={classes.customCard}>
      <div className={classes.icon}>{icon}</div>
      <TextElement as={"h1"} type={"heading-xs"}>
        {title}
      </TextElement>
      <TextElement type={"body-sm"}>{description}</TextElement>
    </section>
  )

  return href ? (
    <Link className={classes.link} href={href}>
      {content}
    </Link>
  ) : (
    content
  )
}

export default CustomCard
