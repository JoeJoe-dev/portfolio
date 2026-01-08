"use client"
import HeroHeader from '@/Components/HeroHeader';

export default function Homepage () {
    return(
        <div className="min-h-screen bg-white pt-16">
            {/* Navbar is provided by layout */}

            {/* Hero Header */}
            <HeroHeader />
        </div>
    )
}