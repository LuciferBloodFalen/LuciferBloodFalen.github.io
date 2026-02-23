import { motion } from 'framer-motion'

const TechChip = ({ tech }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full text-purple-200 text-sm font-medium"
    >
        {tech}
    </motion.span>
)

const ProjectCard = ({ project, index, featured = false }) => {
    if (featured) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
            >
                {/* Large Featured Card */}
                <div className="relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Project Info */}
                        <div className="space-y-6">
                            {/* Featured Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium"
                            >
                                ⭐ Featured Project
                            </motion.div>

                            {/* Project Name */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-white"
                            >
                                {project.name}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="text-gray-300 text-lg leading-relaxed"
                            >
                                {project.description}
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {project.techStack.map((tech, i) => (
                                    <TechChip key={tech} tech={tech} />
                                ))}
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                {project.liveDemo && (
                                    <motion.a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                                    >
                                        Live Demo
                                    </motion.a>
                                )}
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center"
                                >
                                    GitHub
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Right Side - Screenshot */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-500">
                                {/* Placeholder Screenshot */}
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🧠</div>
                                    <div className="text-gray-400 text-lg font-medium">NeuroDebug Interface</div>
                                    <div className="text-gray-500 text-sm mt-2">AI-Powered Debugging Tool</div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-sm"
                            >
                                🚀
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-full" />
                    </div>
                </div>
            </motion.div>
        )
    }

    // Regular Project Card
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            className="group relative"
        >
            <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                {/* Project Icon & Name */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl mr-4">
                        {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.name}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <TechChip key={tech} tech={tech} />
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-400 text-sm">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                {/* GitHub Link */}
                <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-full py-2 px-4 border border-white/20 text-white font-medium rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    View on GitHub
                    <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                    >
                        →
                    </motion.span>
                </motion.a>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-xl pointer-events-none" />
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const featuredProject = {
        name: "NeuroDebug",
        description: "An AI-powered debugging assistant that analyzes code patterns, identifies potential issues, and suggests intelligent solutions. Built with machine learning algorithms to understand code context and provide meaningful debugging insights.",
        techStack: ["Python", "TensorFlow", "Django", "React", "PostgreSQL", "Docker"],
        github: "https://github.com/LuciferBloodFalen/NeuroDebug",
        liveDemo: null, // Add live demo URL if available
        icon: "🧠"
    }

    const otherProjects = [
        {
            name: "Blog Platform",
            description: "A modern, responsive blog platform with rich text editing, user authentication, and admin dashboard. Features include post scheduling, categories, and SEO optimization.",
            techStack: ["Django", "React", "PostgreSQL", "Redis", "AWS"],
            github: "https://github.com/LuciferBloodFalen/blog-platform",
            icon: "📝"
        },
        {
            name: "URL Shortener",
            description: "A fast and reliable URL shortening service with analytics, custom aliases, and QR code generation. Built for high performance and scalability.",
            techStack: ["FastAPI", "Redis", "PostgreSQL", "React", "Docker"],
            github: "https://github.com/LuciferBloodFalen/url_shortener",
            icon: "🔗"
        },
        {
            name: "Ephemeral Backend",
            description: "A lightweight backend service for temporary data storage with automatic expiration. Perfect for one-time file sharing and temporary API responses.",
            techStack: ["Node.js", "Express", "MongoDB", "AWS S3", "Docker"],
            github: "https://github.com/LuciferBloodFalen/ephemeral-backend",
            icon: "⚡"
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my skills in full-stack development, AI/ML, and system design
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Featured Project Spotlight */}
                <div className="mb-20">
                    <ProjectCard project={featuredProject} featured={true} />
                </div>

                {/* Other Projects Grid */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8 text-center"
                    >
                        Other Projects
                    </motion.h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.p
                        className="text-gray-300 text-lg mb-6"
                    >
                        Want to see more of my work?
                    </motion.p>
                    <motion.a
                        href="https://github.com/LuciferBloodFalen"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Visit My GitHub
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
        </section>
    )
}

export default Projects