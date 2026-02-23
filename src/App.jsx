import { motion } from 'framer-motion'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center min-h-screen"
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white text-center"
                >
                    Coming Soon
                </motion.h1>
            </motion.div>
        </div>
    )
}

export default App