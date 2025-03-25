"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"
import { PoppinFont, reckoner } from "../fonts"

export default function PinInitialSection() {
  const [notation, setNotation] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      "#pin-initial-section",
      {
        scale: 0.5,
        rotate: 20,
      },
      {
        scrollTrigger: {
          trigger: "#pin-initial-section",
          start: "10% bottom",
          end: "bottom bottom",
          scrub: true,
        },

        scale: 1,
        rotate: 0,
        ease: "slow(0.7,0.7,false)",
      }
    )

    ScrollTrigger.create({
      trigger: "#pin-initial-section",
      start: "80% bottom",
      scrub: true,
      onEnter: () => {
        setNotation(true)
      },
      onLeaveBack: () => {
        setNotation(false)
      },
    })
  }, [])

  return (
    <section
      id="pin-initial-section"
      style={{
        transform: "50% 0%",
      }}
      className="relative h-[120vh] w-screen bg-black"
    >
      <section className="flex h-full w-full flex-col items-start gap-48 px-4 py-4 pt-[80%] md:pt-4">
        <div className="flex w-full items-center gap-4">
          <div className="flex w-full flex-col items-start">
            <p
              className={cn(
                reckoner.className,
                "text-9xl font-bold leading-[1] tracking-wide text-indigo-400"
              )}
            >
              VIBE <span className="title-stroke">JAM</span> 2025
              <span className="title-stroke">.</span>
            </p>
            <p
              className={cn(
                reckoner.className,
                "text-lg font-medium tracking-tight text-gray-400"
              )}
            >
              ai assistance meets creative vision in game development
            </p>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex h-full flex-col items-end justify-between gap-10">
            <div className="flex w-full flex-col items-start gap-2">
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-lg font-medium text-gray-400"
                  )}
                >
                  By <span className="text-white">@levelsio</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-[88px] font-extrabold leading-[1] text-white"
                  )}
                >
                  #VIBEJAM
                </div>
              </div>
              <div
                className={cn(
                  PoppinFont.className,
                  "pin-initial-description-2 max-w-[340px] text-xs font-medium text-gray-300"
                )}
              >
                Create multiplayer games that are web-accessible and free-to-play. At least 80% of code must be written by AI.
              </div>
              <div className="overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text w-fit bg-violet-500 px-8 py-1 text-lg font-medium text-white"
                  )}
                >
                  SUBMIT NOW
                </div>
              </div>
            </div>

            <div
              className={cn(
                reckoner.className,
                "pin-initial-description text-lg tracking-widest text-white lg:w-[400px]"
              )}
            >
              Join this pioneering event in game development, where AI tools help translate the developer's creative vision into code. Share your progress on social media with the hashtag #vibejam to gain visibility.
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-between gap-10 pr-[5%]">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center justify-between gap-16 overflow-hidden">
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-7xl font-bold italic text-indigo-400"
                  )}
                >
                  Deadline.
                </div>
                <div
                  className={cn(
                    reckoner.className,
                    "pin-initial-text text-7xl font-bold text-white"
                  )}
                >
                  APR 1
                </div>
              </div>
              <div
                className={cn(
                  PoppinFont.className,
                  "pin-initial-description-2 max-w-[340px] text-xs font-medium text-gray-300"
                )}
              >
                Games should be almost instantly playable with no loading screens or heavy downloads. The recommended game engine is ThreeJS, facilitating web-based, multiplayer games.
              </div>
            </div>

            <div
              className={
                "relative flex flex-col items-start gap-6 overflow-hidden text-white"
              }
            >
              <RoughNotation color="#4f46e5" type="highlight" show={notation}>
                <div
                  className={cn(
                    reckoner.className,
                    "px-4 py-1 text-3xl font-medium tracking-widest"
                  )}
                >
                  $5,000 Prize
                </div>
              </RoughNotation>

              <div
                className={cn(
                  PoppinFont.className,
                  "pin-initial-description-2 max-w-[340px] text-xs font-medium text-gray-300"
                )}
              >
                A separate competition offers a $5,000 prize for the best website created for the #vibejam. The judging panel includes notable figures like @karpathy, @levelsio, @timsoret, @mrdoob, and @s13k_.
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
