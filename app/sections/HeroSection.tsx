"use client"

import { useEffect } from "react"
import Cover from "@/app/assets/bg-2-hd.png"
import Star from "@/app/assets/star.svg"
import BoltLogo from "@/app/assets/sponsers/bolt.svg"
import CodeRabbitLogo from "@/app/assets/sponsers/coderabbit.svg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { SyneFont } from "../fonts"

export default function HeroSection() {
  /* Mouse Hover */
  useEffect(() => {
    function parallax(e: MouseEvent) {
      const object = document.querySelector(".hero-image")
      const loader = document.querySelector(".loader-screen") as HTMLElement

      if (!object || (loader && loader.style.display !== "none")) return

      const moving_value: number =
        Number(object.getAttribute("data-value")) || 0
      const x = (e.clientX * moving_value) / 200

      const y = (e.clientY * moving_value) / 200

      gsap.set(object, {
        x,
        y,
      })
    }

    document.addEventListener("mousemove", parallax)

    return () => {
      document.removeEventListener("mousemove", parallax)
    }
  }, [])

  /* Hero Transition */
  useEffect(() => {
    const heroTimeline = gsap.timeline({
      defaults: {
        stagger: 0.15,
        delay: 2,
      },
    })

    heroTimeline.fromTo(
      ".hero-title",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )

    heroTimeline.fromTo(
      ".awward-name",
      {
        x: 100,
      },
      {
        x: 0,
      },
      "-=2.5"
    )

    heroTimeline.fromTo(
      ".bar",
      {
        y: 100,
      },
      {
        y: 0,
      },
      "-=2.2"
    )

    // Add animation for sponsors
    heroTimeline.fromTo(
      ".sponsors-section",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
      },
      "-=2"
    )

    heroTimeline.fromTo(
      ".sponsor-item",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=1.5"
    )
  }, [])

  /* Scroll Trigger */
  useEffect(() => {
    gsap.to("#hero-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#pin-initial-section",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      },
    })

    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "5% bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
      xPercent: -30,
    })

    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "20% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "none",
      yPercent: -200,
    })

    gsap.to(".bar-section", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "10% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "power1.inOut",
      xPercent: -40,
    })

    // Add scroll animation for sponsors
    gsap.to(".sponsors-section", {
      scrollTrigger: {
        trigger: "#pin-initial-section",
        start: "10% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "power1.inOut",
      xPercent: 40,
      opacity: 0,
    })

    ScrollTrigger.create({
      trigger: "#pin-initial-section",
      start: "top bottom",
      end: () => "+=100",
      scrub: true,

      onEnter: () => {
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },

      onEnterBack: () => {
        gsap.to(".header-icon", {
          scale: 0.5,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
    })
  }, [])

  return (
    <section id="hero-section" className="relative h-screen w-screen">
      <Image
        alt="cover-image"
        src={Cover}
        priority
        data-value={-4}
        className="hero-image absolute bottom-0 left-0 h-[600px] w-[500px] object-cover lg:-left-[30%] lg:h-full lg:w-full lg:object-contain"
      />

      <div className="absolute left-1/2 top-[48%] w-fit max-w-3xl -translate-x-1/2 -translate-y-1/2 px-10 mix-blend-difference md:top-[50%] lg:left-[30%] lg:top-[26%] lg:translate-x-0 lg:translate-y-0">
        <div className="hero-title text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:text-[5rem] lg:text-[7.2rem]">
          VIBE
        </div>
        <div className="hero-title ml-[25%] text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:ml-[35%] md:text-[5rem] lg:text-[7.2rem]">
          <span className="title-stroke">J</span>AM
        </div>
        <div className="hero-title ml-[10%] text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:ml-[20%] md:text-[5rem] lg:text-[7.2rem]">
          20<span className="title-stroke">25</span>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-section absolute right-10 top-1/2 flex -translate-y-1/2 flex-col items-end gap-6 md:right-16 lg:gap-8">
        <div className="flex flex-col items-end gap-2">
          <p className={cn(SyneFont.className, "text-sm font-bold text-white md:text-base")}>SPONSORED BY</p>
          <div className="flex flex-col gap-6">
            <div className="sponsor-item flex flex-col items-end gap-2">
              <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
                <p className={cn(SyneFont.className, "text-xs text-white opacity-80 transition-opacity group-hover:opacity-100 md:text-sm")}>bolt.new</p>
                <div className="h-10 w-10 overflow-hidden rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 md:h-12 md:w-12">
                  <Image src={BoltLogo} alt="Bolt.new" width={48} height={48} className="h-full w-full object-cover" />
                </div>
              </a>
            </div>
            <div className="sponsor-item flex flex-col items-end gap-2">
              <a href="https://coderabbitai.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
                <p className={cn(SyneFont.className, "text-xs text-white opacity-80 transition-opacity group-hover:opacity-100 md:text-sm")}>coderabbitai</p>
                <div className="h-10 w-10 overflow-hidden rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 md:h-12 md:w-12">
                  <Image src={CodeRabbitLogo} alt="CodeRabbitAI" width={48} height={48} className="h-full w-full object-cover" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bar absolute bottom-0 inline-flex h-auto w-full flex-nowrap items-center overflow-hidden bg-gray-900 px-20 py-1">
        <div className="bar-section flex w-full shrink-0 items-center gap-14">
          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            AI GAME JAM
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            HOSTED BY @LEVELSIO
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            DEADLINE: APRIL 1, 2025
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            MULTIPLAYER GAMES
          </div>
        </div>
      </div>
    </section>
  )
}
