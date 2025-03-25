"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AfacadFont, SyneFont, reckoner, SchibstedFont } from "../fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Star from "@/app/assets/star.svg"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Game {
  id: string
  title: string
  creator: string
  description: string
  thumbnail: string
  url: string
  tags: string[]
  date: string
}

// This would be replaced with actual data fetching
const fetchGames = async (page = 1, limit = 12) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // Mock data - this would be replaced with actual API call
  const mockGames: Game[] = Array.from({ length: 24 }, (_, i) => ({
    id: `game-${i + (page - 1) * limit}`,
    title: `Vibe Game ${i + (page - 1) * limit + 1}`,
    creator: `Creator ${i % 5 + 1}`,
    description: "An AI-generated multiplayer game created for the 2025 Vibe Coding Game Jam.",
    thumbnail: `https://picsum.photos/seed/${i + (page - 1) * limit}/400/250`,
    url: "#",
    tags: [
      ["3D", "2D", "Puzzle", "Adventure", "Racing"][i % 5],
      ["Multiplayer", "Strategy", "Casual", "RPG", "Arcade"][i % 5],
    ],
    date: `2025-03-${10 + (i % 20)}`
  }))
  
  return {
    games: mockGames,
    totalPages: 84, // 1000+ games / 12 per page
    currentPage: page
  }
}

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const filterOptions = [
    "3D", "2D", "Puzzle", "Adventure", "Racing", "Multiplayer", 
    "Strategy", "Casual", "RPG", "Arcade"
  ]

  // Load games on initial render and page change
  useEffect(() => {
    const loadGames = async () => {
      setLoading(true)
      const data = await fetchGames(currentPage)
      setGames(data.games)
      setTotalPages(data.totalPages)
      setLoading(false)
    }
    
    loadGames()
  }, [currentPage])

  // Initialize animations after component mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate game cards on scroll
      gsap.from(".game-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".games-grid",
          start: "top 80%",
        }
      })
      
      // Animate header
      gsap.from(".page-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

      // Animate search and filter section
      gsap.from(".search-filter-section", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3
      })
      
      // Animate marquee
      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      })
    })
    
    return () => ctx.revert()
  }, [games])

  // Filter games by search term and selected filters
  const filteredGames = games.filter(game => {
    const matchesSearch = 
      searchTerm === "" || 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilters = 
      activeFilters.length === 0 || 
      game.tags.some(tag => activeFilters.includes(tag))
    
    return matchesSearch && matchesFilters
  })

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    )
  }

  // Handle pagination
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add click outside handler to close filter
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const filterElement = document.querySelector('.filter-dropdown')
      const filterButton = document.querySelector('.filter-button')
      if (
        filterElement && 
        !filterElement.contains(event.target as Node) && 
        !filterButton?.contains(event.target as Node)
      ) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="h-auto w-screen bg-[#000000] relative">
      {/* Moving bar at the top - similar to Hero section */}
      <div className="sticky top-0 z-30 flex w-full overflow-hidden bg-gray-900">
        <div className="marquee-wrapper relative w-full overflow-hidden py-3">
          <div className="marquee-content flex items-center whitespace-nowrap">
            <div className="flex items-center gap-8 px-4">
              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                AI GAME JAM
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                HOSTED BY @LEVELSIO
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                DEADLINE: APRIL 1, 2025
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                MULTIPLAYER GAMES
              </div>
            </div>
            {/* Duplicate for seamless looping */}
            <div className="flex items-center gap-8 px-4">
              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                AI GAME JAM
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                HOSTED BY @LEVELSIO
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                DEADLINE: APRIL 1, 2025
              </div>

              <Image
                src={Star}
                className="h-6 w-6 object-contain"
                alt="star-icon"
              />

              <div
                className={cn(
                  SyneFont.className,
                  "flex-none text-xl font-extrabold text-white"
                )}
              >
                MULTIPLAYER GAMES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="container relative mx-auto px-4 py-16 pt-32">
        <h1 className={cn(
          "page-title text-center text-[4.5rem] md:text-[5rem] lg:text-[7.2rem] font-extrabold tracking-tighter text-white mb-8",
          reckoner.className
        )}>
          VIBE GAMES
        </h1>
        <p className={cn(
          "text-center text-white/80 max-w-3xl mx-auto mb-12",
          AfacadFont.className
        )}>
          Explore all games from the 2025 Vibe Coding Game Jam. Search, filter, and discover multiplayer 
          AI-assisted games created by our vibrant community.
        </p>
        
        {/* Search and Filter Section */}
        <div className="search-filter-section relative z-50 flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <Input 
              type="text"
              placeholder="Search games or creators..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white rounded-full focus:ring-2 focus:ring-white/30 focus:border-transparent h-12"
            />
          </div>
          <div className="relative">
            <Button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="filter-button bg-white/10 hover:bg-white/20 text-white rounded-full h-12 px-6 flex items-center gap-2"
            >
              <Filter size={18} />
              <span className={SchibstedFont.className}>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
            </Button>
            
            {isFilterOpen && (
              <div className="filter-dropdown absolute right-0 mt-2 w-80 bg-[#2d2a8f] rounded-2xl shadow-2xl p-6 z-[9999]">
                <div className="relative">
                  <h3 className={cn("text-white text-lg font-bold mb-4", SyneFont.className)}>Game Categories</h3>
                  <div className="flex flex-wrap gap-3">
                    {filterOptions.map(filter => (
                      <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm transition-all duration-200",
                          activeFilters.includes(filter)
                            ? "bg-white text-[#4338ca] font-medium shadow-lg"
                            : "bg-white/10 text-white hover:bg-white/20"
                        )}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Games Grid */}
        <div className="relative z-10">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className={cn("animate-pulse text-white text-lg", AfacadFont.className)}>Loading games...</div>
            </div>
          ) : filteredGames.length > 0 ? (
            <>
              <div className="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <div key={game.id} className="game-card group">
                    <a href={game.url} className="block bg-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={game.thumbnail}
                          alt={game.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4338ca]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4">
                        <h3 className={cn(
                          "text-xl font-bold text-white mb-1 truncate",
                          reckoner.className
                        )}>
                          {game.title}
                        </h3>
                        <p className={cn("text-white/70 text-sm mb-3", AfacadFont.className)}>By {game.creator}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {game.tags.map((tag) => (
                            <span
                              key={`${game.id}-${tag}`}
                              className={cn("bg-white/20 text-white/90 text-xs px-2 py-1 rounded-full", SchibstedFont.className)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center items-center mt-16">
                <div className="flex gap-2">
                  <Button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={cn("bg-white/10 hover:bg-white/20 text-white disabled:opacity-50", SyneFont.className)}
                  >
                    Previous
                  </Button>
                  
                  <div className={cn("flex items-center px-4 bg-white/10 rounded-md text-white", SyneFont.className)}>
                    Page {currentPage} of {totalPages}
                  </div>
                  
                  <Button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={cn("bg-white/10 hover:bg-white/20 text-white disabled:opacity-50", SyneFont.className)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16 text-white">
              <h3 className={cn("text-2xl font-bold mb-2", reckoner.className)}>No games found</h3>
              <p className={AfacadFont.className}>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 