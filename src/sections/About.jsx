import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Avatar/Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Avatar Container */}
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />

                            {/* Main Avatar Circle */}
                            <div className="relative w-full h-full rounded-full backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                                {/* Profile Image Placeholder */}
                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                    {/* Avatar Icon */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 5, 0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="text-8xl"
                                    >
                                        👨‍💻
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-xl"
                            >
                                🚀
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, -180, -360]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xl"
                            >
                                🎯
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Who you are */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="text-2xl font-semibold text-white mb-3"
                            >
                                Hi, I'm Karunakar! 👋
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-lg leading-relaxed"
                            >
                                A passionate full-stack developer who loves solving complex problems
                                and building innovative solutions that make a real impact.
                            </motion.p>
                        </div>

                        {/* What you focus on */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-xl font-semibold text-purple-300 mb-3"
                            >
                                My Focus Areas
                            </motion.h3>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {['Backend Systems', 'AI & Machine Learning', 'Django Development', 'Data Science'].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full text-purple-200 text-sm font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* What you're looking for */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                viewport={{ once: true }}
                                className="text-xl font-semibold text-blue-300 mb-3"
                            >
                                Currently Exploring
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-lg leading-relaxed"
                            >
                                Opportunities to collaborate on cutting-edge projects involving
                                cloud technologies, AI-driven solutions, and scalable system architecture.
                            </motion.p>
                        </div>

                        {/* Connect Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            viewport={{ once: true }}
                            className="pt-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Let's Connect
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="ml-2"
                                >
                                    →
                                </motion.span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About