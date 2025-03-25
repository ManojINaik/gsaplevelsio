## SpecStory

## Code Update: Replace Motion Scape with Vibejam (3/25/2025, 5:38:59 PM)

_**User**_

remove all motion scape related conmtent and update to vibejam content @BioSection.tsx @layout.tsx 

---

_**Assistant**_



---

_****_

I'll update both files to remove Motion Scape content and focus on vibejam.

---

_****_

```diff
                )}
              >
-               Welcome to Motion Scape, where stunning animations and smooth transitions come to life! Powered by GSAP (GreenSock Animation Platform), we specialize in creating dynamic, engaging visuals that elevate user experience.
+               Welcome to #vibejam, the world's first AI-assisted game development competition! Join us in pushing the boundaries of game creation through the innovative concept of vibe coding, where AI and human creativity blend to produce extraordinary multiplayer experiences.
              </p>
  
```

---

_****_

Now I'll update the layout.tsx file to focus on vibejam content:

---

_****_

```diff
  
  export const metadata: Metadata = {
-   title: "vibejam",
+   title: "vibejam - 2025 Vibe Coding Game Jam",
    description:
-     "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
+     "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
    generator: "Next.js",
-   applicationName: "Motion Scape",
+   applicationName: "vibejam",
    referrer: "origin-when-cross-origin",
-   metadataBase: new URL("https://motion-gsap.vercel.app/"),
+   metadataBase: new URL("https://vibejam.vercel.app/"),
    keywords: [
-     "Next.js",
-     "React",
-     "JavaScript",
-     "TypeScript",
-     "GSAP",
-     "Transitions",
-     "Animations",
+     "vibejam",
+     "Game Jam",
+     "AI-assisted",
+     "Vibe Coding",
+     "Game Development",
+     "ThreeJS",
+     "Multiplayer Games",
+     "@levelsio",
    ],
    category: "technology",
    publisher: "devManojINaik",
    openGraph: {
-     title: "Motion Scape Gsap",
+     title: "vibejam - 2025 Vibe Coding Game Jam",
      description:
-       "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
-     url: "https://motion-gsap.vercel.app/",
-     siteName: "Motion Scape",
+       "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
+     url: "https://vibejam.vercel.app/",
+     siteName: "vibejam",
      images: [
        {
          url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
-         alt: "Motion Scape",
+         alt: "vibejam - 2025 Vibe Coding Game Jam",
        },
      ],
    twitter: {
      card: "summary_large_image",
-     title: "Motion Scape",
+     title: "vibejam - 2025 Vibe Coding Game Jam",
      description:
-       "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design. Created to inspire designers and developers, it showcases a variety of smooth, immersive motion effects that add elegance and interactivity to digital experiences.",
+       "Join the first AI-assisted game development competition. Create multiplayer, web-accessible games with at least 80% AI-generated code. #vibejam is hosted by @levelsio with a submission deadline of April 1, 2025.",
      creator: "devManojINaik",
      images: {
        url: "https://i.postimg.cc/4yGnps76/Screenshot-2024-10-29-at-11-07-25-AM.png",
-       alt: "Motion Scape",
+       alt: "vibejam - 2025 Vibe Coding Game Jam",
      },
    },
```

---

_****_

Both files have been updated:

1. In BioSection.tsx:
   - Replaced the Motion Scape paragraph with content about vibejam
   - Kept the existing vibejam-related content

2. In layout.tsx:
   - Updated title to "vibejam - 2025 Vibe Coding Game Jam"
   - Changed all descriptions to focus on the game jam
   - Updated keywords to be relevant to vibejam
   - Changed all references of "Motion Scape" to "vibejam"
   - Updated URLs from motion-gsap to vibejam
   - Modified all metadata to accurately represent the vibejam event

The site now consistently focuses on the vibejam content throughout.

---



---

