"use client"

import Link from "next/link"
import { FC } from "react"
import { AviarySVG } from "@/components/icons/aviary-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.helloaviary.ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <AviarySVG scale={1} />
      </div>

      <div className="text-4xl font-bold tracking-wide">Aviary AI</div>
    </Link>
  )
}
