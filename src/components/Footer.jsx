import { motion } from 'framer-motion'

const SocialIcon = ({ icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
            scale: 1.2,
            rotate: 5,
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
        }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-xl hover:bg-white/10 transition-all duration-300"
        aria-label={label}
    >
        {icon}
    </motion.a>
)

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            icon: "📧",
            href: "mailto:karunakar.raunak@example.com", // Update with actual email
            label: "Email"
        },
        {
            icon: "💻",
            href: "https://github.com/LuciferBloodFalen",
            label: "GitHub"
        },
        {
            icon: "🔗",
            href: "https://linkedin.com/in/karunakar-raunak", // Update with actual LinkedIn
            label: "LinkedIn"
        }
    ]

    return (
        <footer className="relative py-12 px-6 border-t border-white/10">
            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center">
                    {/* Name */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mb-4"
                    >
                        Karunakar Raunak
                    </motion.h3>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={social.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <SocialIcon {...social} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto mb-6"
                    />

                    {/* Copyright & Tech Credits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Karunakar Raunak. All rights reserved.
                        </p>

                        {/* Tech Credits */}
                        <p className="text-gray-500 text-sm">
                            Built with{' '}
                            <span className="text-cyan-400 font-medium">React</span>
                            {' + '}
                            <span className="text-blue-400 font-medium">Tailwind</span>
                            {' + '}
                            <span className="text-purple-400 font-medium">Framer Motion</span>
                        </p>
                    </motion.div>

                    {/* Scroll to Top Button */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 5px 15px rgba(147, 51, 234, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-8 w-12 h-12 rounded-full backdrop-blur-sm bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 hover:bg-purple-600/30 transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        ↑
                    </motion.button>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                        style={{
                            left: `${20 + i * 30}%`,
                            bottom: `${10 + i * 15}%`,
                        }}
                    />
                ))}
            </div>
        </footer>
    )
}

export default Footer