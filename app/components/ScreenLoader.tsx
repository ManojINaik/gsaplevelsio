"use client"

import { useEffect } from "react"
import { disableScroll, enableScroll } from "@/lib/utils"
import gsap from "gsap"

export default function ScreenLoader() {
  useEffect(() => {
    disableScroll()

    gsap.to(".loader-screen", {
      height: 0,
      duration: 0.6,
      delay: 2,

      onComplete: () => {
        enableScroll()
        gsap.set(".loader-screen", {
          display: "none",
        })
      },
    })
  }, [])

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
      },
    })

    timeline.fromTo(".screen-loader-icon", { rotate: 360 }, { rotate: 0 })

    timeline.fromTo(
      "#loader-path-2",
      {
        x: -80,
        y: -50,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
      },
      "<"
    )

    timeline.fromTo(
      "#loader-inner-1",
      {
        x: -40,
        y: -40,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
      },
      "<"
    )

    timeline.to(
      ".screen-loader-icon",
      {
        opacity: 0.1,
        duration: 0.3,
      },
      "-=0.2"
    )

    timeline.to(".screen-loader-icon", {
      opacity: 1,
      duration: 0.1,
    })

    timeline.fromTo(
      ".screen-loader-icon",
      {
        rotate: 180,
        scale: 1,
      },
      {
        scale: 0.5,
        rotate: 0,
        y: 60,
        duration: 0.5,
      },
      "+=0.4"
    )
  }, [])

  return (
    <div className="loader-screen fixed z-50 flex h-screen w-screen items-center justify-center bg-black">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="250" 
        height="250" 
        className="screen-loader-icon overflow-visible"
        viewBox="0 0 120 120" 
      >
        <path 
          id="loader-path-2" 
          d="M63.998 12.002l-4.666 2.666v21.332l-4.666-2.666V19.336l-4.666-2.666v18.666l9.332 5.332v5.332l-13.332-7.332V12.002l-4.666-2.666v29.332L60 50.666l4.666-2.332V12.002z" 
          fill="white"
        />
        <path 
          id="loader-inner-1" 
          d="M82.664 12.002v21.332l-7.998 4.666v-5.332l4.666-2.666V12.002h-4.666v14.666l-4.002 2.332v10.666l4.002 3 14.666-8V12.002z" 
          fill="white"
        />
      </svg>
    </div>
  )
}
