import { motion } from 'framer-motion'

const ContactCard = ({ icon, title, subtitle, href, type }) => {
    const isEmail = type === 'email'
    const linkHref = isEmail ? `mailto:${href}` : href

    return (
        <motion.a
            href={linkHref}
            target={isEmail ? '_self' : '_blank'}
            rel={isEmail ? '' : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group block p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-xl" />

            <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                    }}
                    className="text-4xl mb-4"
                >
                    {icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {subtitle}
                </p>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-all duration-700 group-hover:left-full" />
            </div>
        </motion.a>
    )
}

const Contact = () => {
    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            subtitle: "Get in touch directly",
            href: "karunakar.raunak@example.com", // Update with actual email
            type: "email"
        },
        {
            icon: "💻",
            title: "GitHub",
            subtitle: "Check out my code",
            href: "https://github.com/LuciferBloodFalen",
            type: "link"
        },
        {
            icon: "🔗",
            title: "LinkedIn",
            subtitle: "Let's connect professionally",
            href: "https://linkedin.com/in/karunakar-raunak", // Update with actual LinkedIn
            type: "link"
        }
    ]

    return (
        <section id="contact" className="py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Let's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to collaborate on your next project? I'm always open to discussing new opportunities and innovative ideas.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Large Centered Glass Card */}
                    <div className="relative p-8 md:p-12 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                        <div className="relative z-10">
                            {/* Contact Greeting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Ready to Start Something Amazing?
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    Choose your preferred way to reach out
                                </p>
                            </motion.div>

                            {/* Contact Methods Grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={method.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <ContactCard {...method} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <p className="text-gray-400 mb-6">
                                    Prefer a quick message? Feel free to reach out directly via email for the fastest response.
                                </p>

                                {/* Primary Email CTA */}
                                <motion.a
                                    href="mailto:karunakar.raunak@example.com" // Update with actual email
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Send me an Email
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-full" />
                        </div>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-purple-300/30 hidden lg:flex items-center justify-center text-2xl"
                >
                    💼
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-blue-300/30 hidden lg:flex items-center justify-center text-xl"
                >
                    🚀
                </motion.div>
            </div>
        </section>
    )
}

export default Contact