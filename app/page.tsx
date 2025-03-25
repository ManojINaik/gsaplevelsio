import Link from "next/link"
import BioSection from "./sections/BioSection"
import EndSection from "./sections/EndSection"
import FixedSection from "./sections/FixedSection"
import HeroSection from "./sections/HeroSection"
import ImagesSection from "./sections/ImagesSection"
import PinBackground from "./sections/PinBackground"
import PinInitialSection from "./sections/PinInitialSection"
import PinSection from "./sections/PinSection"
import SliderSection from "./sections/SliderSection"
import SpaceSection from "./sections/SpaceSection"

export default function Home() {
  return (
    <div className="h-auto w-screen bg-[#4338ca]">
      <div className="fixed top-[85vh] right-10 z-50 lg:top-[70vh]">
        <Link href="/games" className="inline-block">
          <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#4338ca] shadow-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl">
            <span>Explore All Games</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
      <HeroSection />
      <FixedSection />
      <PinSection />
      <PinInitialSection />
      <PinBackground />
      <SpaceSection />
      <SliderSection />
      <BioSection />
      <ImagesSection />
      <EndSection />
    </div>
  )
}
