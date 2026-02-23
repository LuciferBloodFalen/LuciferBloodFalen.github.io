import { motion } from 'framer-motion'
import { Navbar, Footer } from './components'
import { Hero, About, Skills, Projects, Contact } from './sections'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default App