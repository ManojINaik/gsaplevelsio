## SpecStory

## Netlify Build Failure Troubleshooting (3/25/2025, 3:41:16 PM)

_**User**_

when deploying ti netlify:
3:43:52 PM: build-image version: 59029cc38debec12b365d8cde2431251b878d6bf (noble)
3:43:52 PM: buildbot version: 40932273cc58bd3d585a06e0c31ae1335dd17e67
3:43:52 PM: Fetching cached dependencies
3:43:52 PM: Failed to fetch cache, continuing with build
3:43:52 PM: Starting to prepare the repo for build
3:43:53 PM: No cached dependencies found. Cloning fresh repo
3:43:53 PM: git clone --filter=blob:none https://github.com/ManojINaik/gsaplevelsio
3:43:53 PM: Preparing Git Reference refs/heads/main
3:43:57 PM: Starting to install dependencies
3:43:57 PM: Python version set to 3.13.2
3:43:57 PM: Ruby version set to 2.7.2
3:43:58 PM: mise go@1.19         install
3:43:58 PM: mise go@1.19         download go1.19.linux-amd64.tar.gz
3:43:59 PM: mise go@1.19         checksum go1.19.linux-amd64.tar.gz
3:43:59 PM: mise go@1.19         extract go1.19.linux-amd64.tar.gz
3:44:00 PM: mise go@1.19         go version
3:44:00 PM: mise go@1.19         go version go1.19 linux/amd64
3:44:00 PM: mise go@1.19       ✓ installed
3:44:00 PM: Go version set to 1.19
3:44:01 PM: Using PHP version 8.3
3:44:02 PM: v22.14.0 is already installed.
3:44:02 PM: Now using node v22.14.0 (npm v10.9.2)
3:44:03 PM: Enabling Node.js Corepack
3:44:03 PM: Started restoring cached build plugins
3:44:03 PM: Finished restoring cached build plugins
3:44:03 PM: Started restoring cached corepack dependencies
3:44:03 PM: Finished restoring cached corepack dependencies
3:44:03 PM: No pnpm workspaces detected
3:44:03 PM: Started restoring cached node modules
3:44:03 PM: Finished restoring cached node modules
3:44:03 PM: Installing npm packages using pnpm version 10.6.3
3:44:04 PM:  WARN  Ignoring not compatible lockfile at /opt/build/repo/pnpm-lock.yaml
3:44:04 PM:  WARN  deprecated @types/gsap@3.0.0: This is a stub types definition. gsap provides its own type definitions, so you do not need this installed.
3:44:04 PM: Progress: resolved 1, reused 0, downloaded 0, added 0
3:44:04 PM:  WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
3:44:05 PM: Progress: resolved 35, reused 0, downloaded 34, added 0
3:44:06 PM: Progress: resolved 159, reused 0, downloaded 127, added 0
3:44:07 PM: Progress: resolved 252, reused 0, downloaded 210, added 0
3:44:08 PM: Progress: resolved 367, reused 0, downloaded 312, added 0
3:44:09 PM:  WARN  5 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, glob@7.2.3, inflight@1.0.6, rimraf@3.0.2
3:44:09 PM: Packages: +454
3:44:09 PM: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
3:44:09 PM: Progress: resolved 491, reused 0, downloaded 459, added 3
3:44:10 PM: Progress: resolved 491, reused 0, downloaded 459, added 454, done
3:44:10 PM: > motion-scape@0.1.0 prepare /opt/build/repo
3:44:10 PM: > husky
3:44:10 PM: dependencies:
3:44:10 PM: + @radix-ui/react-icons 1.3.2
3:44:10 PM: + @radix-ui/react-slot 1.1.2
3:44:10 PM: + @vercel/analytics 1.5.0
3:44:10 PM: + class-variance-authority 0.7.1
3:44:10 PM: + clsx 2.1.1
3:44:10 PM: + gsap 3.12.7
3:44:10 PM: + lenis 1.2.3
3:44:10 PM: + lucide-react 0.451.0 (0.483.0 is available)
3:44:10 PM: + next 14.2.15 (15.2.4 is available)
3:44:10 PM: + react 18.3.1 (19.0.0 is available)
3:44:10 PM: + react-dom 18.3.1 (19.0.0 is available)
3:44:10 PM: + react-rough-notation 1.0.5
3:44:10 PM: + sharp 0.33.5
3:44:10 PM: + split-type 0.3.4
3:44:10 PM: + tailwind-merge 2.6.0 (3.0.2 is available)
3:44:10 PM: + tailwindcss-animate 1.0.7
3:44:10 PM: devDependencies:
3:44:10 PM: + @trivago/prettier-plugin-sort-imports 4.3.0 (5.2.2 is available)
3:44:10 PM: + @types/gsap 3.0.0 deprecated
3:44:10 PM: + @types/node 20.17.27 (22.13.13 is available)
3:44:10 PM: + @types/react 18.3.20 (19.0.12 is available)
3:44:10 PM: + @types/react-dom 18.3.5 (19.0.4 is available)
3:44:10 PM: + @typescript-eslint/eslint-plugin 8.28.0
3:44:10 PM: + @typescript-eslint/parser 8.28.0
3:44:10 PM: + eslint 8.57.1 (9.23.0 is available) deprecated
3:44:10 PM: + eslint-config-next 14.2.15 (15.2.4 is available)
3:44:10 PM: + eslint-config-prettier 9.1.0 (10.1.1 is available)
3:44:10 PM: + eslint-plugin-prettier 5.2.4
3:44:10 PM: + eslint-plugin-unused-imports 4.1.4
3:44:10 PM: + husky 9.1.7
3:44:10 PM: + lint-staged 15.5.0
3:44:10 PM: + postcss 8.5.3
3:44:10 PM: + prettier 3.5.3
3:44:10 PM: + prettier-plugin-tailwindcss 0.6.11
3:44:10 PM: + tailwindcss 3.4.17 (4.0.15 is available)
3:44:10 PM: + typescript 5.8.2
3:44:10 PM: ╭ Warning ─────────────────────────────────────────────────────────────────────╮│                                                                              ││   Ignored build scripts: sharp.                                              ││   Run "pnpm approve-builds" to pick which dependencies should be allowed     ││   to run scripts.                                                            ││                                                                              │╰──────────────────────────────────────────────────────────────────────────────╯
3:44:10 PM: Done in 6.9s using pnpm v10.6.3
3:44:10 PM: npm packages installed using pnpm
3:44:11 PM: Successfully installed dependencies
3:44:12 PM: Starting build script
3:44:14 PM: Detected 1 framework(s)
3:44:14 PM: "next" at version "14.2.15"
3:44:14 PM: Section completed: initializing
3:44:15 PM: ​
3:44:15 PM: Netlify Build                                                 
3:44:15 PM: ────────────────────────────────────────────────────────────────
3:44:15 PM: ​
3:44:15 PM: ❯ Version
3:44:15 PM:   @netlify/build 30.0.5
3:44:15 PM: ​
3:44:15 PM: ❯ Flags
3:44:15 PM:   accountId: 66a82ee8379d18ad2dceb826
3:44:15 PM:   baseRelDir: true
3:44:15 PM:   buildId: 67e281d5e5b161266f92d044
3:44:15 PM:   deployId: 67e281d5e5b161266f92d046
3:44:15 PM: ​
3:44:15 PM: ❯ Current directory
3:44:15 PM:   /opt/build/repo
3:44:15 PM: ​
3:44:15 PM: ❯ Config file
3:44:15 PM:   No config file was defined: using default values.
3:44:15 PM: ​
3:44:15 PM: ❯ Context
3:44:15 PM:   production
3:44:23 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:44:16 PM: ​
3:44:16 PM: ❯ Using Next.js Runtime - v5.10.1
3:44:17 PM: No Next.js cache to restore
3:44:17 PM: ​
3:44:17 PM: Build command from Netlify app                                
3:44:17 PM: ────────────────────────────────────────────────────────────────
3:44:17 PM: ​
3:44:17 PM: $ npm run build
3:44:17 PM: > motion-scape@0.1.0 build
3:44:17 PM: > next build
3:44:18 PM:   ▲ Next.js 14.2.15
3:44:18 PM:    Creating an optimized production build ...
3:44:19 PM:  ⨯ Failed to find font override values for font `Afacad`
3:44:20 PM:  ⨯ Failed to find font override values for font `Afacad`
3:44:22 PM: Failed to compile.
3:44:22 PM: 
3:44:22 PM: ./app/sections/SliderSection.tsx
3:44:22 PM: Module not found: Can't resolve '@/app/assets/robots/TimSoret.jpg'
3:44:22 PM: https://nextjs.org/docs/messages/module-not-found
3:44:22 PM: > Build failed because of webpack errors
3:44:22 PM: ​
3:44:22 PM: "build.command" failed                                        
3:44:22 PM: ────────────────────────────────────────────────────────────────
3:44:22 PM: ​
3:44:22 PM:   Error message
3:44:22 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
3:44:22 PM: ​
3:44:22 PM:   Error location
3:44:22 PM:   In Build command from Netlify app:
3:44:22 PM:   npm run build
3:44:22 PM: ​
3:44:22 PM:   Resolved config
3:44:22 PM:   build:
3:44:22 PM:     command: npm run build
3:44:22 PM:     commandOrigin: ui
3:44:22 PM:     publish: /opt/build/repo/.next
3:44:22 PM:     publishOrigin: ui
3:44:22 PM:   plugins:
3:44:22 PM:     - inputs: {}
3:44:22 PM:       origin: ui
3:44:22 PM:       package: '@netlify/plugin-nextjs'
3:44:23 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:44:23 PM: Failing build: Failed to build site
3:44:23 PM: Finished processing build request in 31.104s

---

_**Assistant**_

Let me analyze the deployment errors and help you fix them. There are two main issues causing the build to fail:

1. Font Issue:
```
⨯ Failed to find font override values for font `Afacad`
```

2. Asset Import Error:
```
Module not found: Can't resolve '@/app/assets/robots/TimSoret.jpg'
```

Let me help you fix these issues:

First, let me check your project structure to better understand the configuration.

---

_****_

<details>
            <summary>Listed current directory • **23** results</summary>
        
| Name |
|-------|
| 📁 `.git` |
| 📁 `.next` |
| 📄 `package-lock.json` |
| 📄 `package.json` |
| 📁 `node_modules` |
| 📁 `app` |
| 📄 `vibejaminformation.md` |
| 📄 `.gitignore` |
| 📄 `README.md` |
| 📄 `tsconfig.json` |
| 📄 `next-env.d.ts` |
| 📁 `.specstory` |
| 📄 `pnpm-lock.yaml` |
| 📄 `postcss.config.mjs` |
| 📄 `tailwind.config.ts` |
| 📁 `components` |
| 📄 `components.json` |
| 📁 `lib` |
| 📄 `next.config.mjs` |
| 📁 `.husky` |
| 📄 `LICENSE` |
| 📄 `.eslintignore` |
| 📄 `.eslintrc.json` |

</details>

---

_****_

Let me check your font configuration and the SliderSection component to address both issues:

---

_****_

Read file: undefined

---

_****_

Read file: undefined

---

_****_

Let me help you fix both issues:

1. For the font issue, I notice you're using the Afacad font but it's not properly configured. Let me check your font configuration:

---

_****_

Could not find file 'app/fonts.ts'. Did you mean one of:
- app/fonts/index.ts

---

_****_

Read file: undefined

---

_****_

2. For the asset issue, I need to check if the assets are in the correct location. Let me check the assets directory:

---

_****_

<details>
            <summary>Listed directory app/assets/robots • **13** results</summary>
        
| Name |
|-------|
| 📄 `levelsio.jpg` |
| 📄 `SakuK.jpg` |
| 📄 `RicardoCabello.jpg` |
| 📄 `timsoret.jpg` |
| 📄 `PieterLevels.png` |
| 📄 `AndrejKarpathy.jpg` |
| 📄 `robot-1.jpg` |
| 📄 `robot-2.jpg` |
| 📄 `robot-3.jpg` |
| 📄 `robot-4.jpg` |
| 📄 `robot-5.jpg` |
| 📄 `robot-6.jpg` |
| 📄 `robot-7.jpg` |

</details>

---

_****_

I see both issues now:

1. The Afacad font issue is because we need to specify the weight in the font configuration.
2. The asset issue is because of case sensitivity in the file names - the import uses `TimSoret.jpg` but the actual file is `timsoret.jpg`.

Let me fix both issues:

1. First, let's fix the font configuration:

---

_****_

```diff
    subsets: ["latin"],
    display: "swap",
+   weight: ["400", "500", "600", "700"]
  })
  
```

---

_****_

2. Now, let's fix the image imports in the SliderSection component:

---

_****_

```diff
  import AndrejKarpathy from "@/app/assets/robots/AndrejKarpathy.jpg"
  import PieterLevels from "@/app/assets/robots/PieterLevels.png"
- import TimSoret from "@/app/assets/robots/TimSoret.jpg"
+ import TimSoret from "@/app/assets/robots/timsoret.jpg"
  import RicardoCabello from "@/app/assets/robots/RicardoCabello.jpg"
  import SakuK from "@/app/assets/robots/SakuK.jpg"
```

---

_****_



---



---

