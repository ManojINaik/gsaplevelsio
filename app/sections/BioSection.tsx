"use client"

import { useEffect } from "react"
import Cover from "@/app/assets/robots/robot-4.jpg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import SplitType from "split-type"
import { PoppinFont } from "../fonts"
import { reckoner } from "../fonts"
import { AfacadFont } from "../fonts"

export default function BioSection() {
  /* Layout Transition */
  useEffect(() => {
    gsap.to("#bio-section-container", {
      scrollTrigger: {
        trigger: "#bio-section-container",
        start: "top top",
        endTrigger: "#images-section-container",
        end: "180px bottom",
        pin: true,
        pinSpacing: false,
        onLeaveBack: () => {
          gsap.to(".bio-section", {
            scale: 1,
          })
        },
        onEnter: () => {
          gsap.to(".bio-section", {
            scale: 0.5,
          })
        },
        onEnterBack: () => {
          gsap.to(".bio-section", {
            scale: 0.5,
          })
        },
      },
    })
  }, [])

  /* Page Transition */
  useEffect(() => {
    const bioText = new SplitType(".bio-text", {
      types: "lines",
      tagName: "span",
    })

    gsap.set(bioText.lines, {
      display: "inline-block",
    })

    const tl = gsap.timeline({
      defaults: {
        stagger: 0.2,
      },
    })

    tl.fromTo(
      bioText.lines,
      {
        xPercent: 30,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#bio-section-container",
          start: "40% bottom",
          end: "top top",
          scrub: true,
        },
      }
    )

    tl.fromTo(
      ".bio-image",
      {
        height: 0,
      },
      {
        height: 405,
        scrollTrigger: {
          trigger: "#bio-section-container",
          start: "40% bottom",
          end: "top top",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section
      id="bio-section-container"
      className="relative z-20 h-screen w-screen bg-white"
    >
      <div className="bio-section h-full w-full origin-center bg-black p-5">
        <div
          className={cn(
            PoppinFont.className,
            "flex h-full w-full flex-col items-center gap-16 lg:flex-row"
          )}
        >
          <div className="relative flex h-full flex-1 flex-col items-center justify-center">
            <div className="absolute left-0 top-0 flex w-full items-center gap-28">
              <div className="text-xs font-semibold tracking-widest text-white">
                VIBECODE/
              </div>
              <div className="text-xs tracking-widest text-white">GAME</div>
            </div>

            <div className="mt-10 w-full md:w-3/4 lg:mt-0">
              <Image
                alt="cover"
                src={Cover}
                className="bio-image mx-auto h-full rounded-md object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center lg:w-[40%] lg:pr-20">
            <div className="absolute left-0 top-0 flex w-full items-center gap-28">
              <div className="text-xs font-semibold tracking-widest text-white">
                VIBECODE/
              </div>
              <div className="text-xs tracking-widest text-white">GAME</div>
            </div>

            <div className="mt-10 flex w-full flex-col items-start gap-10 lg:mt-0">
              <div className="bio-text overflow-hidden text-4xl text-white">
                2025 Vibe Coding Game Jam: The first AI-assisted game development competition
              </div>
              <div className="bio-text hidden w-full overflow-hidden text-white md:block lg:w-[80%]">
                Join the innovative #vibejam hosted by @levelsio - the first game jam dedicated to AI vibecoded games. Create multiplayer, web-accessible games with at least 80% AI-generated code. Games must be free-to-play and instantly playable, preferably using ThreeJS. Submit by April 1, 2025 and share your journey on social media with #vibejam. Our judging panel includes notable figures like @karpathy, @levelsio, @timsoret, @mrdoob, and @s13k_, with sponsorships from boltdotnew and coderabbitai.
              </div>
              <button className="hidden items-center gap-4 rounded-full bg-indigo-600 px-5 py-2 md:flex">
                <div className="text-xs text-white">Learn More About #vibejam</div>
                <ArrowRight className="text-white" size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="my-10 flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
          <div
            className={cn(
              reckoner.className,
              "text-5xl font-medium uppercase text-white md:text-6xl "
            )}
          >
            Vibe Coding<br />Game Jam
          </div>

          <div className="flex w-full max-w-xl flex-col gap-6">
            <p
              className={cn(
                AfacadFont.className,
                "text-sm font-medium text-white md:text-base"
              )}
            >
              Welcome to Motion Scape, where stunning animations and smooth transitions come to life! Powered by GSAP (GreenSock Animation Platform), we specialize in creating dynamic, engaging visuals that elevate user experience.
            </p>

            <p
              className={cn(
                AfacadFont.className,
                "text-sm font-medium text-white md:text-base"
              )}
            >
              The #vibejam, hosted by @levelsio, is the "2025 Vibe Coding Game Jam," focusing on creating AI-assisted multiplayer games. Open to all, with a deadline of April 1, 2025, games must be web-accessible, free-to-play, and coded at least 80% by AI, preferably using ThreeJS. Participants are encouraged to share progress on social media with the hashtag #vibejam.
            </p>

            <p
              className={cn(
                AfacadFont.className,
                "text-sm font-medium text-white md:text-base"
              )}
            >
              While specific prizes for the game jam remain unannounced, there's a separate competition offering a $5,000 prize for the best website created for the #vibejam, highlighting the event's broader organizational efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
