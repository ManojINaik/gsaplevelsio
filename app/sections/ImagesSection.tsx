"use client"

import { useEffect } from "react"
import Image1 from "@/app/assets/kid-robot/gameimg-1.png"
import Image2 from "@/app/assets/kid-robot/gameimg-2.png"
import Image3 from "@/app/assets/kid-robot/gameimg-3.png"
import Image4 from "@/app/assets/kid-robot/gameimg-4.png"
import Image5 from "@/app/assets/kid-robot/gameimg-5.png"
import Image6 from "@/app/assets/kid-robot/gameimg-6.png"
import Image7 from "@/app/assets/kid-robot/gameimg-7.png"
import Image8 from "@/app/assets/kid-robot/gameimg-8.png"
import Image9 from "@/app/assets/kid-robot/gameimg-9.png"
import Image10 from "@/app/assets/kid-robot/gameimg-10.png"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import Image from "next/image"
import { AfacadFont, PoppinFont } from "../fonts"

// Default value for the repo URL
const GITHUB_REPO = process.env.GITHUB_REPO || "/games"

// Image data with URLs
const IMAGE_LINKS = [
  { url: "https://t.co/AYPBoL1jyb", label: "Play Now" },
  { url: "https://vibeskater.themodernspellbook.com/", label: "Play Now" },
  { url: "https://rpg.devalien.dev/", label: "Play Now" },
  { url: "https://example.com/game4", label: "Play Now" },
  { url: "https://mow.survibe.xyz/", label: "Play Now" },
  { url: "https://redlightgreenlight-1061766046734.us-central1.run.app/", label: "Play Now" },
  { url: "https://typenoon.com/", label: "Play Now" },
  { url: "https://example.com/game8", label: "Play Now" },
  { url: "https://example.com/game9", label: "Play Now" },
  { url: "https://example.com/game10", label: "Play Now" },
]

// Simple image container with button
const ImageContainer = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const handleClick = () => window.open(IMAGE_LINKS[index].url, '_blank');
  
  return (
    <div 
      className="relative cursor-pointer" 
      style={{ pointerEvents: 'auto' }}
      onClick={handleClick}
    >
      <div 
        className="image-container relative overflow-hidden rounded-md"
        style={{ pointerEvents: 'auto' }}
      >
        {children}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: 'auto' }}
        >
          <button
            onClick={handleClick}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold shadow-xl hover:bg-indigo-700 transition-colors z-[99999] cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            {IMAGE_LINKS[index].label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ImagesSection() {
  // Layout Transition
  useEffect(() => {
    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom bottom",

        onLeaveBack: () => {
          gsap.to(".images-section", {
            scale: 0.5,
          })
        },

        onEnterBack: () => {
          gsap.to(".images-section", {
            scale: 1,
          })
        },

        onEnter: () => {
          gsap.to(".images-section", {
            scale: 1,
          })
        },
      },
    })

    gsap.to("#images-section-container", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
      },
    })
  }, [])

  // Image Scroll
  useEffect(() => {
    gsap.to(".left-section", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -200,
    })

    gsap.to(".right-section", {
      scrollTrigger: {
        trigger: "#images-section-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -140,
    })
  }, [])

  // Ensure pointer events work
  useEffect(() => {
    // First, ensure GSAP doesn't interfere with pointer events
    const style = document.createElement('style');
    style.innerHTML = `
      .image-container, .left-section, .right-section, .images-section, 
      .left-section *, .right-section *, .images-section * {
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
    
    // Add pointer-events: auto to all relevant containers
    const containers = document.querySelectorAll('.image-container, .left-section, .right-section, .images-section');
    containers.forEach(container => {
      (container as HTMLElement).style.pointerEvents = 'auto';
    });
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="images-section-container"
      className="relative z-[31] h-[400vh] w-screen bg-white"
    >
      <div 
        className="images-section sticky left-0 top-0 z-50 h-screen origin-center scale-50 overflow-hidden bg-black" 
        style={{ pointerEvents: 'auto' }}
      >
        {/* Hero Content */}
        <div className="relative left-0 top-0 z-[1] flex h-full flex-col items-center justify-center gap-10">
          <div
            className={cn(
              PoppinFont.className,
              "max-w-[80%] text-center text-5xl font-extrabold tracking-wide text-indigo-400 md:text-7xl lg:max-w-[30%]"
            )}
          >
            FEATURED GAMES
          </div>
          
          <a
            href="/games"
            className={cn(
              "flex items-center gap-4 rounded-lg bg-gray-600 px-6 py-2 text-white hover:bg-gray-700 transition-colors"
            )}
          >
            <span
              className={cn(
                "text-sm font-medium tracking-tight",
                AfacadFont.className
              )}
            >
              View all GAMES
            </span>
          </a>
        </div>

        {/* Images Left */}
        <div
          className="left-section absolute z-[2] p-14"
          style={{
            inset: "0% auto 0% 0%",
            pointerEvents: 'auto'
          }}
        >
          <div className="flex flex-col gap-[16vw] pt-[70vh] will-change-transform" style={{ pointerEvents: 'auto' }}>
            <div className="relative left-[-10vw] h-[40vw] w-[40vw] md:left-[1vw] lg:h-[400px] lg:w-[22vw]">
              <ImageContainer index={0}>
                <Image
                  src={Image1}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-1-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative left-[-10vw] mt-[15vw] h-[40vw] w-[40vw] md:left-0 md:mt-0 lg:h-[400px] lg:w-[22vw]">
              <ImageContainer index={1}>
                <Image
                  src={Image2}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-2-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative left-[-3vw] mt-[5vw] h-[40vw] w-[40vw] md:left-[4vw] md:mt-[-10vw] lg:h-[400px] lg:w-[20vw]">
              <ImageContainer index={2}>
                <Image
                  src={Image3}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-3-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative left-[52vw] top-[-120vw] mt-[-45vw] h-[40vw] w-[40vw] md:left-[64vw] md:top-[-73.4vw] lg:h-[400px] lg:w-[20vw]">
              <ImageContainer index={3}>
                <Image
                  src={Image4}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-4-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative left-[48vw] mt-[-90vw] h-[40vw] w-[40vw] md:left-[58vw] md:mt-[-75vw] lg:h-[400px] lg:w-[22vw]">
              <ImageContainer index={4}>
                <Image
                  src={Image5}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-5-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative left-[55vw] mt-[8vw] h-[40vw] w-[40vw] md:left-[64vw] md:mt-[-10vw] lg:h-[400px] lg:w-[20vw]">
              <ImageContainer index={5}>
                <Image
                  src={Image6}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-6-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>
          </div>
        </div>

        {/* Images Right */}
        <div
          className="right-section absolute z-[2]"
          style={{
            inset: "0% 0% 0% auto",
            pointerEvents: 'auto'
          }}
        >
          <div className="flex flex-col gap-[16vw] pt-[70vh] will-change-transform" style={{ pointerEvents: 'auto' }}>
            <div className="relative right-[50vw] top-[16vw] h-[40vw] w-[40vw] text-white opacity-75 md:right-[60vw] md:top-[14vw] lg:h-[400px] lg:w-[20vw]">
              <ImageContainer index={6}>
                <Image
                  src={Image7}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-7-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative right-[42vw] mt-[14vw] h-[40vw] w-[40vw] text-white opacity-75 md:right-[58vw] md:mt-[5vw] lg:h-[400px] lg:w-[22vw]">
              <ImageContainer index={7}>
                <Image
                  src={Image8}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-8-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative right-[-15vw] top-[-70vw] h-[40vw] w-[40vw] text-white opacity-75 md:right-[5vw] lg:h-[400px] lg:w-[20vw]">
              <ImageContainer index={8}>
                <Image
                  src={Image9}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-9-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>

            <div className="relative right-[1vw] top-[-55vw] h-[40vw] w-[40vw] text-white opacity-75 md:right-[15vw] md:top-[-80vw] lg:h-[360px] lg:w-[20vw]">
              <ImageContainer index={9}>
                <Image
                  src={Image10}
                  priority
                  className="h-full w-full object-cover cursor-pointer"
                  alt="card-10-image"
                  style={{ pointerEvents: 'auto' }}
                />
              </ImageContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
