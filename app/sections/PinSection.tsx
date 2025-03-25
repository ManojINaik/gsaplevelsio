"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitType from "split-type"
import NftCodingGif from "@/app/assets/gif/Nft Coding GIF.gif"
import ProgrammerCodingGif from "@/app/assets/gif/Programmer Coding GIF.gif"
import RobotGif from "@/app/assets/gif/Rock Coding GIF by PRTG.gif"
import { reckoner, SyneFont, AgdasimaFont } from "../fonts"

gsap.registerPlugin(ScrollTrigger)

const images = [
  NftCodingGif,
  ProgrammerCodingGif,
  RobotGif,
]

// Update content for vibejam
const pinContent = [
  {
    title: "GAME REQUIREMENTS",
    subtitle: "Technical Rules",
    description: "Create innovative multiplayer experiences that are web-accessible and instantly playable. No loading screens or heavy downloads allowed—just pure creativity. With 80% AI-generated code powered by ThreeJS, push the boundaries of what's possible when human vision meets artificial intelligence.",
  },
  {
    title: "JUDGING PANEL",
    subtitle: "Tech Visionaries",
    description: "Your creation will be evaluated by legends in the tech and gaming world: @karpathy (AI pioneer), @levelsio (indie maker extraordinaire), @timsoret (visual genius), @mrdoob (ThreeJS creator), and @s13k_ (game development guru). Sponsored by boltdotnew and coderabbitai to redefine game creation.",
  },
  {
    title: "SPECIAL PRIZES",
    subtitle: "Beyond Gaming",
    description: "While creating your game masterpiece, compete for a $5,000 prize in our parallel website competition. Design an incredible #vibejam promotional site and gain double exposure. Share your journey using #vibejam across social platforms to amplify your visibility and connect with fellow creators.",
  },
]

export default function PinSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  /* Box Scale Animation */
  useEffect(() => {
    gsap.to(".pinned", {
      scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        endTrigger: "#space-section",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".pin-box", {
      scaleX: 0.9,
      scaleY: 1.7,
      ease: "none",
      duration: 5,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "32% bottom",
        end: "80% bottom",
        scrub: true,
      },
    })

    let mm = gsap.matchMedia()

    /* Desktop */
    mm.add("(min-width: 800px)", () => {
      gsap.to(".pin-box", {
        scaleX: 1.4,
        scaleY: 1.2,
        ease: "none",
        duration: 5,

        immediateRender: false,
        scrollTrigger: {
          trigger: "#pin-content-section-2",
          start: "32% bottom",
          end: "80% bottom",
          scrub: true,
        },
      })
    })

    mm.add("(min-width: 800px)", () => {
      gsap.to(".pin-box", {
        scrollTrigger: {
          trigger: "#space-section",
          start: "20% bottom",
          end: "bottom bottom",
          scrub: true,
          immediateRender: false,

          onUpdate: (self) => {
            const scale = 1 + 10 * self.progress

            gsap.to(".pin-box", {
              scale,
              ease: "none",
            })
          },
        },
      })
    })

    /* Mobile */
    mm.add("(max-width: 799px)", () => {
      gsap.to(".pin-box", {
        scaleX: 0.9,
        scaleY: 1.9,
        ease: "none",
        duration: 5,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#pin-content-section-2",
          start: "32% bottom",
          end: "80% bottom",
          scrub: true,
        },
      })
    })

    mm.add("(max-width: 799px)", () => {
      gsap.to(".pin-box", {
        scrollTrigger: {
          trigger: "#space-section",
          start: "20% bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
          // onUpdate: (self) => {
          //   const scale = 20 * self.progress

          //   gsap.to(".pin-box", {
          //     scale,
          //     ease: "none",
          //   })
          // },
        },
        ease: "none",
        scaleX: 4,
        scaleY: 20,
      })
    })
  }, [])

  /* Box Slider Animation */
  useEffect(() => {
    gsap.to("#slider-1", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "30% bottom",
        end: "50% bottom",
        scrub: true,
        onLeave: () => {
          setActiveImageIndex(1)
        },
        onLeaveBack: () => {
          setActiveImageIndex(0)
        },
      },
      height: "100%",
    })

    gsap.to("#slider-1", {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to("#slider-2", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "20% bottom",
        end: "40% bottom",
        scrub: true,
        onLeave: () => {
          setActiveImageIndex(2)
        },
        onLeaveBack: () => {
          setActiveImageIndex(1)
        },
      },
      height: "100%",
    })

    gsap.to("#slider-2", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to("#slider-3", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "5% bottom",
        end: "25% bottom",
        scrub: true,
      },
      height: "100%",
    })
  }, [])

  /* Content Animation 1 */
  useEffect(() => {
    /* Content Intro */
    const pinContentDescripton1 = new SplitType("#pin-content-description-1", {
      types: "lines",
      tagName: "span",
      lineClass: "translate-y-[100%]",
    })

    if (!pinContentDescripton1.lines) return
    ;[...pinContentDescripton1.lines]?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.to(["#pin-content-text-1"], {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to(pinContentDescripton1.lines, {
      scrollTrigger: {
        trigger: "#pin-content-section-1",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })
    /* Content Intro */

    /* Content Leave */
    gsap.to("#content-section", {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "32% bottom",
        end: "70% bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -300,
    })
    /* Content Leave */
  }, [])

  /* Content Animation 2 */
  useEffect(() => {
    /* Content Intro */
    const pinContentDescripton2 = new SplitType("#pin-content-description-2", {
      types: "lines",
      tagName: "span",
      lineClass: "translate-y-[100%]",
    })

    if (!pinContentDescripton2.lines) return
    ;[...pinContentDescripton2.lines]?.forEach((line) => {
      const wrapper = document.createElement("div")
      wrapper.classList.add("overflow-hidden")
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.to(["#pin-content-text-2"], {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })

    gsap.to(pinContentDescripton2.lines, {
      scrollTrigger: {
        trigger: "#pin-content-section-2",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      yPercent: -100,
    })
    /* Content Intro */

    /* Content Leave */
    gsap.to("#content-section-2", {
      scrollTrigger: {
        trigger: "#space-section",
        start: "20% bottom",
        end: "80% bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -300,
    })
    /* Content Leave */
  }, [])

  return (
    <section className="pinned absolute top-[100vh] z-20 h-screen w-screen md:top-[100vh]">
      {/* Box */}
      <div className="pin-box absolute left-1/2 top-[10%] z-10 h-[160px] w-[200px] -translate-x-1/2 scale-100 overflow-hidden border-[1px] border-white bg-white shadow-md md:top-1/2 md:h-[260px] md:w-[300px] md:-translate-y-1/2">
        <div className="pin-gif-wrapper absolute left-0 top-0 z-[5] h-full w-full">
          {images.map((src, index) => (
            <img
              key={index}
              alt={`pin-gif-${index + 1}`}
              className={cn(`pin-gif-${index + 1} h-full w-full`, {
                hidden: activeImageIndex !== index,
              })}
              src={typeof src === 'string' ? src : src.src}
            />
          ))}
        </div>
        {/* Slider */}
        <div
          id="slider-1"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />
        <div
          id="slider-2"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />

        <div
          id="slider-3"
          className="absolute bottom-0 right-0 z-10 h-0 w-full bg-white"
        />

        {/* Slider */}
      </div>
      {/* Box */}

      {/* Content */}
      <div className="absolute left-0 top-0 mt-[40%] flex h-full w-full items-center justify-center md:mt-0">
        <div
          id="content-section"
          className="h-fit w-full max-w-[85%] md:max-w-[95%]"
        >
          <div className="flex w-full flex-col items-center justify-between gap-20 md:flex-row">
            <div className="flex w-full flex-col gap-6 md:w-[30%]">
              <div className="flex flex-col gap-1">
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-1"
                    className={cn(
                      reckoner.className,
                      "translate-y-[100%] text-5xl font-medium leading-[1] tracking-wider text-white"
                    )}
                  >
                    {pinContent[0].title}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-1"
                    className={cn(
                      SyneFont.className,
                      "translate-y-[100%] text-5xl font-medium leading-[1] text-indigo-400"
                    )}
                  >
                    {pinContent[0].subtitle}
                  </div>
                </div>
              </div>

              <div
                id="pin-content-description-1"
                className={cn(
                  AgdasimaFont.className,
                  "text-sm font-normal leading-[1.5] tracking-tight text-white"
                )}
              >
                {pinContent[0].description}
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 pr-[2%] md:w-[30%]">
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-1"
                  className={cn(
                    reckoner.className,
                    "translate-y-[100%] text-5xl font-medium tracking-wider text-white"
                  )}
                >
                  {pinContent[1].title}
                </div>
              </div>
              <div
                id="pin-content-description-1"
                className={cn(
                  AgdasimaFont.className,
                  "pin-bg-description-2 text-sm font-normal leading-[1.5] tracking-tight text-white"
                )}
              >
                {pinContent[1].description}
              </div>
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-1"
                  className={cn(
                    SyneFont.className,
                    "translate-y-[100%] text-sm font-medium uppercase tracking-tight text-indigo-300"
                  )}
                >
                  keep scroll
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 mt-[40%] flex h-full w-full items-center justify-center md:mt-0">
        <div
          id="content-section-2"
          className="h-fit w-full max-w-[85%] md:max-w-[95%]"
        >
          <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
            <div className="flex w-full flex-col gap-6 md:w-[30%]">
              <div className="flex flex-col gap-1">
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-2"
                    className={cn(
                      reckoner.className,
                      "translate-y-[100%] text-5xl font-medium leading-[1] tracking-wider text-white"
                    )}
                  >
                    {pinContent[2].title}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    id="pin-content-text-2"
                    className={cn(
                      SyneFont.className,
                      "translate-y-[100%] text-5xl font-medium leading-[1] text-indigo-400"
                    )}
                  >
                    {pinContent[2].subtitle}
                  </div>
                </div>
              </div>

              <div
                id="pin-content-description-2"
                className={cn(
                  AgdasimaFont.className,
                  "text-sm font-normal leading-[1.5] tracking-tight text-white"
                )}
              >
                {pinContent[2].description}
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 pr-[2%] md:w-[30%]">
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-2"
                  className={cn(
                    reckoner.className,
                    "translate-y-[100%] text-5xl font-medium tracking-wider text-white"
                  )}
                >
                  #VIBECODED
                </div>
              </div>
              <div
                id="pin-content-description-2"
                className={cn(
                  AgdasimaFont.className,
                  "text-sm font-normal leading-[1.5] tracking-tight text-white"
                )}
              >
                Enter the future of game development where AI and human creativity form a perfect symbiosis. The 2025 Vibe Coding Game Jam isn't just a competition—it's a movement redefining what's possible in collaborative creation. Web-accessible, multiplayer, and vibecoded—this is game development evolved.
              </div>
              <div className="overflow-hidden">
                <div
                  id="pin-content-text-2"
                  className={cn(
                    SyneFont.className,
                    "translate-y-[100%] text-sm font-medium uppercase tracking-tight text-indigo-300"
                  )}
                >
                  SUBMIT BY APRIL 1, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
    </section>
  )
}
