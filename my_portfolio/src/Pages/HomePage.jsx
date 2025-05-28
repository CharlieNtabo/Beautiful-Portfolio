import { AboutSection } from "../Component/AboutSection.jsx"
import { HeroSection } from "../Component/HeroSection.jsx"
import { Navbar } from "../Component/Navbar.jsx"
import { StarBackground } from "../Component/StarBackground.jsx"
import { ThemeToggle } from "../Component/ThemeToggle.jsx"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
        </main>


        {/* Footer */}
    </div>
}