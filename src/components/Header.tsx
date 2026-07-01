"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["HOME", "CHAT", "CONTACTS", "SETTINGS"];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative bg-gradient-to-r from-[#4A3F71] to-[#5E507F] z-20">
            <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-6">
                <div className="flex items-center relative min-w-0">
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-teal-400 rounded-full opacity-80"></div>
                    <span className="font-bold text-white text-lg sm:text-xl md:text-2xl tracking-tight truncate">Sales Agentic Chatbot 🤖</span>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            className={`text-xs px-4 py-2 font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                                item === "CHAT"
                                    ? "text-white bg-white/10 hover:bg-white/15"
                                    : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="md:hidden shrink-0 text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile nav dropdown */}
            {menuOpen && (
                <nav className="md:hidden relative flex flex-col px-4 pb-4 space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm px-4 py-2.5 font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                                item === "CHAT"
                                    ? "text-white bg-white/10"
                                    : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
