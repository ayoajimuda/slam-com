'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className='header'>
            <button 
            className='menu-button'
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}>
                <span/>
                <span/>
                <span/>
            </button>

            <div className='slam-logo'>
                <Link href="/" onClick={closeMenu}>
                    <Image src="/images/logo.png" alt="Slam Logo" width={124} height={124} priority/>
                </Link>
            </div>

            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/tricks" onClick={closeMenu}>Trick Library</Link></li>
                    <li><Link href="/map" onClick={closeMenu}>Skate Map</Link></li>
                    <li><Link href="/guides" onClick={closeMenu}>Guides/Blogs</Link></li>
                    <li><Link href="/customize" onClick={closeMenu}>Customize</Link></li>
                    <li><Link href="/connect" onClick={closeMenu}>Community</Link></li>
                </ul>
            </nav>

            <button className='profile-button' aria-label='Profile'>
                <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                </svg>
            </button>
        </header>
    )
}
export default Header;