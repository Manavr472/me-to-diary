'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Calendar, Heart, Users, Target, ArrowRight, Mail, Instagram, Twitter, Menu, X, BookOpen, Coffee, Sparkles, Flower, Flower2 } from 'lucide-react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Deterministic positioning for floating elements to avoid hydration errors
  const sunflowerPositions = [
    { top: 20, left: 15 }, { top: 65, left: 85 }, { top: 35, left: 45 }, 
    { top: 80, left: 25 }, { top: 10, left: 70 }, { top: 55, left: 10 },
    { top: 75, left: 60 }, { top: 25, left: 90 }, { top: 45, left: 30 },
    { top: 90, left: 50 }
  ]

  const butterflyPositions = [
    { top: 30, left: 20 }, { top: 70, left: 75 }, { top: 15, left: 55 },
    { top: 85, left: 40 }, { top: 45, left: 85 }, { top: 60, left: 15 },
    { top: 25, left: 65 }, { top: 80, left: 80 }
  ]

  const sparklePositions = [
    { top: 10, left: 10 }, { top: 20, left: 80 }, { top: 40, left: 25 },
    { top: 60, left: 70 }, { top: 80, left: 35 }, { top: 15, left: 50 },
    { top: 35, left: 90 }, { top: 70, left: 45 }, { top: 90, left: 20 },
    { top: 25, left: 40 }, { top: 50, left: 60 }, { top: 75, left: 15 },
    { top: 85, left: 75 }, { top: 30, left: 65 }, { top: 55, left: 30 },
    { top: 65, left: 85 }, { top: 45, left: 20 }, { top: 75, left: 55 },
    { top: 95, left: 40 }, { top: 5, left: 85 }
  ]

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Lead Facilitator",
      bio: "Mental health advocate with 8+ years in community building and emotional wellness",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rahul Mehta",
      role: "Co-Founder & Program Director",
      bio: "Mindfulness coach passionate about creating safe spaces for self-reflection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Anisha Patel",
      role: "Community Manager",
      bio: "Psychology graduate fostering authentic connections and meaningful conversations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ]

  const cohorts = [
    {
      title: "Spring Reflections 2024",
      period: "March - May 2024",
      participants: 45,
      topics: ["Love", "Self-Compassion", "Hope", "Fear", "Joy"],
      description: "Our inaugural cohort exploring the fundamentals of emotional awareness"
    },
    {
      title: "Summer Growth 2024",
      period: "June - August 2024",
      participants: 62,
      topics: ["Grief", "Desire", "Aggression", "Mixed Emotions", "Purpose"],
      description: "Deep dive into complex emotions and personal transformation"
    },
    {
      title: "Autumn Journey 2024",
      period: "September - November 2024",
      participants: 78,
      topics: ["Gratitude", "Change", "Acceptance", "Courage", "Wisdom"],
      description: "Focusing on resilience and wisdom gained through life experiences"
    },
    {
      title: "Winter Depths 2024",
      period: "December 2024 - February 2025",
      participants: 89,
      topics: ["Solitude", "Renewal", "Dreams", "Connection", "Growth"],
      description: "Introspective exploration of inner landscapes and future aspirations"
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 relative ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-25 to-orange-25 text-amber-900'
    }`}>
      
      {/* Enhanced Diary/Journal Paper Background */}
      {/* Vintage diary paper base */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[radial-gradient(ellipse_at_center,_rgba(254,243,199,0.03)_0%,_rgba(245,158,11,0.04)_50%,_rgba(120,53,15,0.02)_100%)]'
          : 'bg-[radial-gradient(ellipse_at_center,_rgba(254,243,199,0.6)_0%,_rgba(245,158,11,0.15)_50%,_rgba(120,53,15,0.08)_100%)]'
      } bg-[size:800px_600px] opacity-85`} />
      
      {/* Diary ruled lines */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[repeating-linear-gradient(0deg,_transparent_0px,_transparent_25px,_rgba(120,53,15,0.06)_26px,_rgba(120,53,15,0.06)_26px,_transparent_27px,_transparent_51px)]'
          : 'bg-[repeating-linear-gradient(0deg,_transparent_0px,_transparent_25px,_rgba(59,130,246,0.08)_26px,_rgba(59,130,246,0.08)_26px,_transparent_27px,_transparent_51px)]'
      } opacity-25`} />
      
      {/* Red margin line */}
      <div className={`absolute top-0 bottom-0 left-16 w-px ${
        isDark 
          ? 'bg-red-700/20'
          : 'bg-red-500/25'
      }`} />
      
      {/* Paper grain and fiber texture */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_2px_2px,_rgba(245,158,11,0.015)_1px,_transparent_1px)]'
          : 'bg-[radial-gradient(circle_at_2px_2px,_rgba(120,53,15,0.02)_1px,_transparent_1px)]'
      } bg-[size:6px_6px] opacity-50`} />
      
      {/* Aged paper spots and coffee stains */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_12%_30%,_rgba(120,53,15,0.04)_0%,_transparent_15%),radial-gradient(circle_at_88%_65%,_rgba(245,158,11,0.03)_0%,_transparent_20%),radial-gradient(circle_at_65%_18%,_rgba(120,53,15,0.035)_0%,_transparent_12%),radial-gradient(circle_at_25%_82%,_rgba(180,83,9,0.025)_0%,_transparent_18%)]'
          : 'bg-[radial-gradient(circle_at_12%_30%,_rgba(120,53,15,0.05)_0%,_transparent_15%),radial-gradient(circle_at_88%_65%,_rgba(245,158,11,0.04)_0%,_transparent_20%),radial-gradient(circle_at_65%_18%,_rgba(120,53,15,0.04)_0%,_transparent_12%),radial-gradient(circle_at_25%_82%,_rgba(180,83,9,0.03)_0%,_transparent_18%)]'
      } bg-[size:350px_450px] opacity-60`} />
      
      {/* Subtle paper crease/fold marks */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[linear-gradient(125deg,_transparent_48%,_rgba(120,53,15,0.02)_49%,_rgba(120,53,15,0.02)_51%,_transparent_52%),linear-gradient(35deg,_transparent_68%,_rgba(245,158,11,0.015)_69%,_rgba(245,158,11,0.015)_71%,_transparent_72%)]'
          : 'bg-[linear-gradient(125deg,_transparent_48%,_rgba(120,53,15,0.025)_49%,_rgba(120,53,15,0.025)_51%,_transparent_52%),linear-gradient(35deg,_transparent_68%,_rgba(245,158,11,0.02)_69%,_rgba(245,158,11,0.02)_71%,_transparent_72%)]'
      } opacity-30`} />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating diary elements - ink spots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ink-${i}`}
            className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-blue-400/20' : 'bg-blue-600/15'}`}
            style={{
              top: `${25 + i * 25}%`,
              left: `${15 + i * 30}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating diary elements - gentle hearts */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className={`absolute text-lg ${isDark ? 'text-rose-400/25' : 'text-rose-500/20'}`}
            style={{
              top: `${20 + i * 20}%`,
              left: `${80 + (i % 2) * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            ♡
          </motion.div>
        ))}
        
        {sunflowerPositions.map((position, i) => (
          <motion.div
            key={`sunflower-${i}`}
            className={`absolute ${isDark ? 'text-yellow-400/30' : 'text-amber-600/35'}`}
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Flower className="w-6 h-6" />
          </motion.div>
        ))}
        
        {/* Enhanced Floating Butterflies */}
        {butterflyPositions.map((position, i) => (
          <motion.div
            key={`butterfly-${i}`}
            className={`absolute ${isDark ? 'text-orange-400/40' : 'text-orange-600/35'}`}
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -50, 25, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 10 + (i % 4),
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          >
            <span className="text-3xl">🦋</span>
          </motion.div>
        ))}
        
        {/* Enhanced Peaceful Sparkles */}
        {sparklePositions.map((position, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={`absolute w-1.5 h-1.5 rounded-full ${isDark ? 'bg-yellow-300/40' : 'bg-amber-400/35'}`}
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-black/95 backdrop-blur-xl border-b border-gray-600/30 shadow-lg shadow-black/30' : 'bg-stone-50/95 backdrop-blur-xl border-b border-slate-300/40 shadow-lg shadow-slate-300/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className={`p-1 rounded-full ${isDark ? 'bg-gray-700/50' : 'bg-slate-200'}`}>
                <img 
                  src="/image/logo.png" 
                  alt="Me to Dairy Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Me to Dairy
              </span>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('vision')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Vision
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('team')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('cohorts')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Cohorts
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className={`hover:text-rose-500 transition-all duration-200 font-medium relative group ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
              
              {/* Enhanced Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-slate-200 hover:bg-slate-300 border border-slate-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </motion.button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50' : 'bg-slate-200 hover:bg-slate-300 border border-slate-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </motion.button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-all duration-200 ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-200'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${isDark ? 'bg-black/95' : 'bg-stone-50/95'} backdrop-blur-xl border-t ${isDark ? 'border-gray-600/30' : 'border-slate-300/40'}`}
            >
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('hero')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>About</button>
                <button onClick={() => scrollToSection('vision')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>Vision</button>
                <button onClick={() => scrollToSection('team')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>Team</button>
                <button onClick={() => scrollToSection('cohorts')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>Cohorts</button>
                <button onClick={() => scrollToSection('contact')} className={`block w-full text-left py-3 px-4 rounded-lg hover:text-rose-500 transition-all duration-200 font-medium ${isDark ? 'text-gray-200 hover:bg-gray-700/30' : 'text-slate-700 hover:bg-slate-100'}`}>Contact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Peaceful Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Sunflower in corner */}
          <motion.div
            className={`absolute top-10 right-10 ${isDark ? 'text-amber-400/25' : 'text-yellow-600/30'}`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-8xl">🌻</span>
          </motion.div>
          
          {/* Peaceful nature elements */}
          <motion.div
            className={`absolute bottom-20 left-10 ${isDark ? 'text-purple-400/30' : 'text-indigo-500/35'}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-6xl">🌸</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-handwritten"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Me to Dairy
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl mb-8 font-serif ${isDark ? 'text-gray-200' : 'text-slate-700'}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Sundays for Self Reflection
            </motion.p>
            
            <motion.p 
              className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-body ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A weekly community gathering where we explore the depths of our emotions, 
              share authentic stories, and grow together through meaningful conversations 
              that matter.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className={`px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 shadow-lg shadow-amber-500/25' 
                    : 'bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-400 hover:to-indigo-500 shadow-lg shadow-rose-500/25'
                } hover:shadow-xl transform hover:scale-105`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('cohorts')}
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  isDark 
                    ? 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-slate-900 hover:shadow-lg hover:shadow-amber-400/25' 
                    : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Past Cohorts
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className={`py-20 ${isDark ? 'bg-slate-800/40' : 'bg-stone-100/70'} backdrop-blur-sm relative`}>
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-10">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`${isDark ? 'text-amber-400/35' : 'text-yellow-500/45'}`}
          >
            <span className="text-6xl">🌻</span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent font-display">
              About Me to Dairy
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className={`h-px w-20 ${isDark ? 'bg-amber-400/30' : 'bg-slate-400/40'}`}></div>
              <span className={`mx-4 text-2xl ${isDark ? 'text-amber-400/50' : 'text-rose-500/60'}`}>♡</span>
              <div className={`h-px w-20 ${isDark ? 'bg-amber-400/30' : 'bg-slate-400/40'}`}></div>
            </div>
            <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-body ${isDark ? 'text-amber-50' : 'text-slate-700'}`}>
              Me to Dairy is more than just a Sunday gathering—it's a sanctuary for the soul. 
              Every week, we create a safe space where individuals come together to explore 
              their inner landscapes through guided reflection, meaningful dialogue, and 
              authentic storytelling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Emotional Wellness",
                description: "Guided sessions that help you understand and process your emotions in a healthy, supportive environment."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community Connection",
                description: "Build meaningful relationships with like-minded individuals on similar journeys of self-discovery."
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Personal Growth",
                description: "Weekly prompts and reflections designed to deepen your self-awareness and foster personal development."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 relative ${
                  isDark 
                    ? 'bg-slate-700/50 hover:bg-slate-700/70 border-2 border-dashed border-amber-400/20 shadow-lg shadow-slate-900/20' 
                    : 'bg-white/90 hover:bg-white shadow-lg hover:shadow-xl border-2 border-dashed border-slate-300/40'
                }`}
              >
                {/* Diary-style corner decoration */}
                <div className={`absolute top-3 right-3 w-4 h-4 ${isDark ? 'text-amber-400/30' : 'text-rose-400/40'}`}>
                  <span className="text-sm">❀</span>
                </div>
                <div className={`${isDark ? 'text-amber-400' : 'text-rose-500'} mb-4 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 font-serif ${isDark ? 'text-amber-100' : 'text-slate-800'}`}>{feature.title}</h3>
                <p className={`${isDark ? 'text-amber-50' : 'text-slate-600'} leading-relaxed font-body`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 relative">
        {/* Peaceful decorative elements */}
        <div className="absolute top-20 right-20">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`${isDark ? 'text-rose-400/30' : 'text-amber-500/40'}`}
          >
            <Flower2 className="w-16 h-16" />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent font-display">
                Our Vision
              </h2>
              <div className="flex items-center mb-4">
                <div className={`h-px w-16 ${isDark ? 'bg-amber-400/30' : 'bg-slate-400/40'}`}></div>
                <span className={`mx-3 text-xl ${isDark ? 'text-amber-400/50' : 'text-rose-500/60'}`}>✧</span>
                <div className={`h-px w-16 ${isDark ? 'bg-amber-400/30' : 'bg-slate-400/40'}`}></div>
              </div>
              <p className={`text-lg md:text-xl leading-relaxed mb-6 font-body ${isDark ? 'text-amber-50' : 'text-slate-700'}`}>
                We envision a world where emotional literacy is as fundamental as reading and writing. 
                Through Me to Dairy, we're building a global community of emotionally aware individuals 
                who can navigate life's complexities with grace, empathy, and authentic self-expression.
              </p>
              <div className="space-y-4">
                {[
                  "Foster emotional intelligence and self-awareness",
                  "Create safe spaces for vulnerable conversations", 
                  "Build lasting communities of support and growth",
                  "Normalize mental health and emotional wellness"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-amber-400' : 'bg-rose-500'}`} />
                    <span className={isDark ? 'text-amber-50' : 'text-slate-700'}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-slate-700/50 border border-amber-400/30 shadow-lg shadow-slate-900/20' : 'bg-white/90 border border-slate-200/60 shadow-lg'} backdrop-blur-sm`}>
                <div className="flex items-center space-x-4 mb-6">
                  <Target className={`w-8 h-8 ${isDark ? 'text-amber-400' : 'text-rose-500'}`} />
                  <h3 className={`text-xl font-semibold font-serif ${isDark ? 'text-amber-100' : 'text-slate-800'}`}>Our Mission</h3>
                </div>
                <p className={`${isDark ? 'text-amber-50' : 'text-slate-600'} leading-relaxed font-body`}>
                  To provide a weekly sanctuary where individuals can pause from life's rush, 
                  reflect deeply on their emotional experiences, and connect authentically 
                  with others. We believe that through shared vulnerability and guided 
                  reflection, we can all become more emotionally intelligent and fulfilled human beings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-20 ${isDark ? 'bg-slate-700/30' : 'bg-amber-50/60'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent font-display">
              Meet Our Team
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-body ${isDark ? 'text-amber-100' : 'text-slate-600'}`}>
              Our passionate team of facilitators and community builders are dedicated to creating 
              meaningful experiences that foster growth, connection, and emotional wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-600/40 hover:bg-slate-600/60 border border-amber-400/25' 
                    : 'bg-white/85 hover:bg-white shadow-md hover:shadow-lg border border-slate-200/50'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-400/25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/15 to-indigo-500/15 rounded-full" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 font-serif">{member.name}</h3>
                <p className={`font-medium mb-4 ${isDark ? 'text-amber-400' : 'text-rose-500'}`}>
                  {member.role}
                </p>
                <p className={`${isDark ? 'text-amber-100' : 'text-slate-600'} leading-relaxed font-body`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohorts Section */}
      <section id="cohorts" className="py-20 relative">
        {/* Peaceful background decoration */}
        <div className="absolute bottom-10 left-10">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`${isDark ? 'text-amber-400/35' : 'text-indigo-500/45'}`}
          >
            <span className="text-5xl">🌺</span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent font-display">
              Our Journey So Far
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-body ${isDark ? 'text-amber-100' : 'text-slate-600'}`}>
              Since our inception, we've facilitated transformative cohorts that have touched 
              hundreds of lives. Here's a glimpse into our past journeys.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-600/40 hover:bg-slate-600/60 border border-amber-400/25' 
                    : 'bg-white/85 hover:bg-white shadow-md hover:shadow-lg border border-slate-200/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Calendar className={`w-8 h-8 ${isDark ? 'text-amber-400' : 'text-rose-500'}`} />
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    isDark ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {cohort.participants} participants
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 font-serif">{cohort.title}</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-amber-300' : 'text-slate-500'}`}>
                  {cohort.period}
                </p>
                <p className={`mb-4 leading-relaxed font-body ${isDark ? 'text-amber-100' : 'text-slate-600'}`}>
                  {cohort.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cohort.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark 
                          ? 'bg-slate-500/50 text-amber-200' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className={`inline-flex items-center space-x-4 px-8 py-4 rounded-full ${
              isDark ? 'bg-slate-600/40 border border-amber-400/25' : 'bg-white/85 border border-slate-200/50'
            } backdrop-blur-sm`}>
              <Users className={`w-6 h-6 ${isDark ? 'text-amber-400' : 'text-rose-500'}`} />
              <span className="text-lg font-semibold">
                <span className="text-2xl bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
                  274+
                </span> Lives Touched
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className={`py-20 ${isDark ? 'bg-slate-700/30' : 'bg-amber-50/60'} backdrop-blur-sm relative`}>
        {/* Final decorative elements */}
        <div className="absolute top-10 left-10">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`${isDark ? 'text-amber-400/40' : 'text-rose-500/50'}`}
          >
            <span className="text-4xl">🌻</span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-amber-500 bg-clip-text text-transparent font-display">
              Join Our Community
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-body ${isDark ? 'text-amber-100' : 'text-slate-600'}`}>
              Ready to embark on your journey of self-reflection? Connect with us and be part 
              of a community that values authenticity, growth, and emotional wellness.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "hello@metodairy.com" },
                { icon: <Instagram className="w-6 h-6" />, label: "Instagram", value: "@metodairy" },
                { icon: <Twitter className="w-6 h-6" />, label: "Twitter", value: "@metodairy" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-600/40 hover:bg-slate-600/60 text-amber-100 border border-amber-400/25' 
                      : 'bg-white/85 hover:bg-white text-slate-700 shadow-sm hover:shadow-md border border-slate-200/50'
                  }`}
                >
                  <span className={isDark ? 'text-amber-400' : 'text-rose-500'}>
                    {contact.icon}
                  </span>
                  <span className="font-medium">{contact.value}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button
              className={`px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500' 
                  : 'bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-400 hover:to-indigo-500'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join Next Cohort
              <Coffee className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center pt-8 border-t ${isDark ? 'border-amber-400/25' : 'border-slate-300'}`}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="/image/logo.png" 
                alt="Me to Dairy Logo" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-indigo-600 bg-clip-text text-transparent">
                Me to Dairy
              </span>
            </div>
            <p className={`text-sm ${isDark ? 'text-amber-200' : 'text-slate-500'}`}>
              © 2025 Me to Dairy. Creating spaces for authentic self-reflection, one Sunday at a time.
            </p>
            <p className={`text-xs mt-2 ${isDark ? 'text-amber-300' : 'text-slate-400'}`}>
              Sundays for Self Reflection
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
