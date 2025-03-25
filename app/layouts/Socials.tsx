"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { reckoner, SyneFont } from "../fonts"

// Vibejam links
const TWITTER_LINK = "https://twitter.com/hashtag/vibejam"
const JUDGES_LINK = "#slider-section"
const ABOUT_LINK = "#bio-section-container"
const GAMES_LINK = "#images-section-container"
const SUBMIT_LINK = "https://jam.pieter.com/"

export default function Socials() {
  const [whiteBg, setWhiteBg] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#slider-section",
      start: "top bottom",
      end: "bottom top",
      onEnterBack: () => {
        setWhiteBg(false)
      },
      onEnter: () => {
        setWhiteBg(true)
      },
      onLeave: () => {
        setWhiteBg(false)
      },
      onLeaveBack: () => {
        setWhiteBg(false)
      },
    })

    gsap.to("#socials-section", {
      delay: 2.6,
      yPercent: 100,
      ease: "circ",
    })
  }, [])
  return (
    <div
      id="socials-section"
      className="fixed top-0 z-50 hidden w-screen -translate-y-[100%] justify-end bg-transparent py-5 pr-10 md:flex"
    >
      <div
        className={cn(
          reckoner.className,
          "flex items-center gap-10 transition-all"
        )}
      >
        <a
          href={TWITTER_LINK}
          aria-label="Twitter hashtag"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
            { "text-black before:bg-indigo-500 hover:text-white": whiteBg }
          )}
        >
          Twitter.
        </a>
        <a
          href={JUDGES_LINK}
          aria-label="Judges section"
          className={cn(
            "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
            { "text-black before:bg-indigo-500 hover:text-white": whiteBg }
          )}
        >
          Judges.
        </a>
        <a
          href={ABOUT_LINK}
          aria-label="About section"
          className={cn(
            "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
            { "text-black before:bg-indigo-500 hover:text-white": whiteBg }
          )}
        >
          About.
        </a>
        <a
          href={GAMES_LINK}
          aria-label="Games section"
          className={cn(
            "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
            { "text-black before:bg-indigo-500 hover:text-white": whiteBg }
          )}
        >
          Games.
        </a>
        <a
          href={SUBMIT_LINK}
          aria-label="Submit project"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative cursor-pointer bg-indigo-600 px-5 py-2 text-lg font-medium tracking-wider text-white transition-all hover:bg-indigo-500"
          )}
        >
          Submit.
        </a>
      </div>
    </div>
  )
}
