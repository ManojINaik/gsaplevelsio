import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import ScreenLoader from "./components/ScreenLoader"
import { geistMono, geistSans } from "./fonts"
import "./globals.css"
import Header from "./layouts/Header"
import Socials from "./layouts/Socials"

export const metadata: Metadata = {
  title: "vibejam - 2025 Vibe Coding Game Jam",
  description:
    "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
  generator: "Next.js",
  applicationName: "vibejam",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://jam.pieter.com/"),
  keywords: [
    "vibejam",
    "Game Jam",
    "AI-assisted",
    "Vibe Coding",
    "Game Development",
    "ThreeJS",
    "Multiplayer Games",
    "@levelsio",
  ],
  category: "technology",
  authors: [{ name: "devManojINaik", url: "https://devManojINaik.vercel.app/" }],
  creator: "devManojINaik",
  publisher: "devManojINaik",
  openGraph: {
    title: "vibejam - 2025 Vibe Coding Game Jam",
    description:
      "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
    url: "https://vibejam.vercel.app/",
    siteName: "vibejam",
    images: [
      {
        url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
        alt: "vibejam - 2025 Vibe Coding Game Jam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vibejam - 2025 Vibe Coding Game Jam",
    description:
      "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
    creator: "devManojINaik",
    images: {
      url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
      alt: "vibejam - 2025 Vibe Coding Game Jam",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScreenLoader />
        <Header />
        <Socials />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
