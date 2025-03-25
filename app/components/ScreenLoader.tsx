"use client"

import { useEffect } from "react"
import { disableScroll, enableScroll } from "@/lib/utils"
import gsap from "gsap"

export default function ScreenLoader() {
  useEffect(() => {
    disableScroll()

    gsap.to(".loader-screen", {
      height: 0,
      duration: 0.8,
      delay: 2.2,
      ease: "power3.inOut",
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
        duration: 1.2,
        ease: "power2.out",
      },
    })

    // Initial subtle appearance
    timeline.fromTo(".screen-loader-icon", 
      { 
        opacity: 0,
        scale: 0.7,
      }, 
      { 
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }
    )

    // Elegant rotation
    timeline.fromTo(".screen-loader-icon", 
      { 
        rotate: 15
      }, 
      { 
        rotate: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
      }, 
      "-=0.4"
    )

    // First path animation with bounce
    timeline.fromTo(
      "#loader-path-2",
      {
        x: -60,
        y: -30,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.4)",
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
      },
      "-=0.9"
    )

    // Second path animation with slight delay
    timeline.fromTo(
      "#loader-inner-1",
      {
        x: -30,
        y: -20,
        opacity: 0,
        scale: 0.8,
        ease: "back.out(1.7)",
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
      },
      "-=0.8"
    )

    // Subtle glow effect
    timeline.fromTo(
      ".screen-loader-icon",
      {
        filter: "brightness(1)",
      },
      {
        filter: "brightness(1.5)",
        duration: 0.4,
        ease: "sine.inOut",
      },
      "+=0.1"
    )

    // Elegant fade pulse
    timeline.to(
      ".screen-loader-icon",
      {
        opacity: 0.7,
        duration: 0.3,
        ease: "sine.inOut",
      },
      "+=0.1"
    )

    timeline.to(
      ".screen-loader-icon",
      {
        opacity: 1,
        duration: 0.3,
        filter: "brightness(1)",
        ease: "power1.out",
      }
    )

    // Final fluid animation
    timeline.fromTo(
      ".screen-loader-icon",
      {
        rotate: 0,
        scale: 1,
      },
      {
        scale: 0.55,
        rotate: -5,
        y: 40,
        duration: 0.7,
        ease: "power3.inOut",
      },
      "+=0.2"
    )

    // Settling animation
    timeline.to(
      ".screen-loader-icon",
      {
        rotate: 0,
        duration: 0.4,
        ease: "back.out(2)",
      }
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
