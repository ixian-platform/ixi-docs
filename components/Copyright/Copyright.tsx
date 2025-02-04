"use client"

import React, { useEffect, useState } from "react"

import TextElement from "@/components/TextElement/TextElement"

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <TextElement type={"label-sm"}>&copy; Ixian, 2017 - {year}</TextElement>
  )
}

export default Copyright
