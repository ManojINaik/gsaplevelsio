import { cn } from "@/lib/utils"
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import { PoppinFont } from "../fonts"

const GITHUB_ACC = process.env.GITHUB_ACC
const LINKEDIN_ACC = process.env.LINKEDIN_ACC
const TWITTER_ACC = process.env.TWITTER_ACC

export default function EndSection() {
  return (
    <section
      id="end-section"
      className={cn(
        PoppinFont.className,
        "relative z-[32] h-auto w-screen bg-indigo-800"
      )}
    >
      <div className="flex h-full w-full flex-col justify-between gap-10 px-2 pb-3 pt-[8%]">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0 lg:px-10">
          <div className="col-span-6">
            <div className="flex flex-col gap-2">
              <div className="text-xl tracking-tight text-white">
                #vibejam is the first game jam dedicated to AI-assisted game development.
              </div>
              <div className="tracking-tight text-white">
                @2025 Vibe Coding Game Jam
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-xs text-white">
              Create multiplayer, web-accessible games with at least 80% AI-generated code. Submit by April 1, 2025. Hosted by @levelsio.
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="flex flex-row items-start justify-between gap-5 lg:flex-col lg:pl-[60%]">
              <a
                href={LINKEDIN_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <LinkedInLogoIcon className="text-white" />
                <div className="text-xs text-white">Linkedin</div>
              </a>
              <a
                href={GITHUB_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon className="text-white" />
                <div className="text-xs text-white">Github</div>
              </a>
              <a
                href={TWITTER_ACC}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <TwitterLogoIcon className="text-white" />
                <div className="text-xs text-white">Twitter</div>
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "text-5xl font-bold uppercase leading-[1] tracking-tighter text-gray-200 md:text-8xl lg:text-[200px]"
          }
        >
          VIBE JAM
        </div>
      </div>
    </section>
  )
}
