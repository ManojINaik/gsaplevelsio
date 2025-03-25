"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Link from "next/link"
import mountLenis from "../utils/mountLenis"

export default function Header() {
  mountLenis()

  useEffect(() => {
    gsap.to(".header-icon", {
      display: "block",
      delay: 2.6,
    })
  }, [])

  return (
    <div className="fixed z-50 flex w-screen items-center justify-between px-8 py-6">
      <Link href="/" className="pointer-events-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          className="header-icon relative top-[-56px] hidden scale-50 overflow-visible"
          viewBox="0 0 120 120"
        >
          <path
            id="inner-1"
            d="M63.998 12.002l-4.666 2.666v21.332l-4.666-2.666V19.336l-4.666-2.666v18.666l9.332 5.332v5.332l-13.332-7.332V12.002l-4.666-2.666v29.332L60 50.666l4.666-2.332V12.002z"
            fill="white"
          />
          <path
            id="inner-2"
            d="M82.664 12.002v21.332l-7.998 4.666v-5.332l4.666-2.666V12.002h-4.666v14.666l-4.002 2.332v10.666l4.002 3 14.666-8V12.002z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  )
}
