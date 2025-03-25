"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AfacadFont, reckoner } from "../fonts"
import { cn } from "@/lib/utils"

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

  return (
    <div className="min-h-screen w-screen bg-[#4338ca] pt-20 pb-20">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className={cn(
          "page-title text-center text-5xl md:text-7xl font-bold text-white mb-8",
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
        <div className="search-filter-section flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
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
              className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 px-6 flex items-center gap-2"
            >
              <Filter size={18} />
              <span>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
            </Button>
            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#2d2a8f] rounded-lg shadow-lg p-4 z-10">
                <h3 className="text-white font-bold mb-2">Game Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map(filter => (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        activeFilters.includes(filter)
                          ? "bg-white text-[#4338ca]"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Games Grid */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-pulse text-white text-lg">Loading games...</div>
          </div>
        ) : filteredGames.length > 0 ? (
          <>
            <div className="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <div key={game.id} className="game-card group">
                  <a href={game.url} className="block bg-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
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
                      <p className="text-white/70 text-sm mb-3">By {game.creator}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {game.tags.map((tag) => (
                          <span
                            key={`${game.id}-${tag}`}
                            className="bg-white/20 text-white/90 text-xs px-2 py-1 rounded-full"
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
                  className="bg-white/10 hover:bg-white/20 text-white disabled:opacity-50"
                >
                  Previous
                </Button>
                
                <div className="flex items-center px-4 bg-white/10 rounded-md text-white">
                  Page {currentPage} of {totalPages}
                </div>
                
                <Button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-white/10 hover:bg-white/20 text-white disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-white">
            <h3 className="text-2xl font-bold mb-2">No games found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
} 