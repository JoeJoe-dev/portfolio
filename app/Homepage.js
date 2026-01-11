"use client"
import HeroHeader from '@/Components/HeroHeader';
import ITberries from '@/Components/ITBerries';
import AboutSection from '@/Components/AboutSection';
import Skills from '@/Components/Skills';
import PortfolioSection from '@/Components/Portfoliosectio';

export default function Homepage () {
    return(
        <div className="min-h-screen bg-white pt-16">
            {/* Navbar is provided by layout */}

            {/* Hero Header */}
            <HeroHeader />

            {/* ITBerries */}
            <ITberries />

            {/* About Section */}
            <AboutSection />

            {/* Skills */}
            <Skills />

            {/* Portfolio Section */}
            <Portfoliosection />
        </div>
    )
}