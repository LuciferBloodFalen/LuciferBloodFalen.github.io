import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TypingAnimation = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text])

    return (
        <span className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block"
            >
                |
            </motion.span>
        </span>
    )
}

const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => (
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            }}
            animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
            }}
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
        />
    ))

    return <div className="absolute inset-0 overflow-hidden">{particles}</div>
}

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Floating Particles Background */}
            <FloatingParticles />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-left"
                    >
                        {/* Name with Gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold"
                        >
                            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
                                Karunakar
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                Raunak
                            </span>
                        </motion.h1>

                        {/* Role with Typing Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-6"
                        >
                            <TypingAnimation
                                text="Full Stack Developer & Problem Solver"
                                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2 }}
                            className="mt-6 text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
                        >
                            Crafting elegant solutions with Django, React, and modern web technologies.
                            Passionate about clean code and innovative user experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.5 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            {/* View Projects Button */}
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                View Projects
                            </motion.a>

                            {/* Download Resume Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                Download Resume
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative"
                    >
                        {/* Main Circle with Floating Animation */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-80 h-80 mx-auto"
                        >
                            {/* Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-purple-500/30"
                            />

                            {/* Middle Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-blue-500/30"
                            />

                            {/* Inner Circle */}
                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-6xl"
                                >
                                    💻
                                </motion.div>
                            </div>

                            {/* Floating Dots */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                                    style={{
                                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero