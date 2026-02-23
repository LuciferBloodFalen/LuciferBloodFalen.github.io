import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
        return () => unsubscribe()
    }, [scrollY])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/20 backdrop-blur-md shadow-lg shadow-black/20'
                : 'bg-white/5 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-white font-bold text-xl tracking-wide"
                    >
                        Karunakar Raunak
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    color: "#f97316",
                                    transition: { duration: 0.2 }
                                }}
                                className="text-white/80 hover:text-orange-500 font-medium tracking-wide transition-colors duration-200 cursor-pointer"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-white p-2"
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Glass border effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.nav>
    )
}

export default Navbar