import { motion } from 'framer-motion'

const SkillCard = ({ skill, index, groupIndex }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: groupIndex * 0.2 + index * 0.1
            }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            className="group relative"
        >
            {/* Glass Card */}
            <div className="relative p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300 rounded-xl" />

                {/* Content */}
                <div className="relative z-10 text-center">
                    {/* Icon with Pop Animation */}
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                        }}
                        className="text-4xl mb-3 filter drop-shadow-lg"
                    >
                        {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="font-semibold text-white text-lg mb-2">
                        {skill.name}
                    </h3>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-all duration-700 group-hover:left-full" />
                </div>
            </div>
        </motion.div>
    )
}

const SkillGroup = ({ group, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            {/* Group Title */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-6"
            >
                <span className="text-2xl mr-3">{group.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                    {group.title}
                </h3>
                <div className="ml-4 flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent" />
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, skillIndex) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                        groupIndex={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

const Skills = () => {
    const skillGroups = [
        {
            title: "Languages",
            icon: "💬",
            skills: [
                { name: "Python", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">Py</div> },
                { name: "JavaScript", icon: <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black font-bold text-lg">JS</div> },
                { name: "C++", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">C++</div> },
                { name: "TypeScript", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">TS</div> }
            ]
        },
        {
            title: "Frameworks",
            icon: "🏗️",
            skills: [
                { name: "Django", icon: <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">DJ</div> },
                { name: "React", icon: <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">⚛</div> },
                { name: "Node.js", icon: <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">Node</div> },
                { name: "FastAPI", icon: <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">API</div> }
            ]
        },
        {
            title: "Tools & Cloud",
            icon: "🛠️",
            skills: [
                { name: "Docker", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">🐋</div> },
                { name: "AWS", icon: <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">AWS</div> },
                { name: "Git", icon: <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">⎇</div> },
                { name: "PostgreSQL", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">SQL</div> }
            ]
        },
        {
            title: "AI & Data Science",
            icon: "🤖",
            skills: [
                { name: "TensorFlow", icon: <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">TF</div> },
                { name: "Pandas", icon: <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">🐼</div> },
                { name: "NumPy", icon: <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">Np</div> },
                { name: "Matplotlib", icon: <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">📈</div> }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
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
                        Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of technologies and tools I use to build amazing solutions
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Skills Groups */}
                <div className="space-y-12">
                    {skillGroups.map((group, index) => (
                        <SkillGroup key={group.title} group={group} index={index} />
                    ))}
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
                        Always learning and exploring new technologies
                    </motion.p>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        See My Projects
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

export default Skills