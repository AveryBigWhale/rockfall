"use client"

import { useState } from 'react';
import Link from 'next/link'
import ImageLoader from '../components/ImageLoader';

export default function Navigation() {
    const navItems = [
        { name: '關於我們', href: '/ufoundation/about' },
        // { name: '專案計畫', href: '/ufoundation/projects' },
        { name: '最新消息', href: '/ufoundation/news' },
    ]
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <header className="relative bg-ufoundationLightMain">
        
        <div className="container mx-auto flex justify-between items-center px-6">
            <div className="flex items-center">
                <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg"
                    style={{
                    backgroundImage: `url(${ImageLoader({ src: '/emblem.svg' })})`,
                    backgroundSize: 'cover',
                    // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
                    backgroundPosition: 'center',
                }} />
                <Link href="/" className="text-2xl font-bold text-primary">
                    U Foundation
                </Link>
            </div>
            
       
            <nav className={`md:flex ${isOpen ? 'flex' : 'hidden'} md:static bg-ufoundationLightMain`}>
                    
                <ul className="flex space-x-6 bg-ufoundationLightMain ml-auto">
                {navItems.map((item) => (
                    <li key={item.name}>
                    <a 
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {item.name}
                    </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-intertidalDarkMain text-4xl w-25 h-25 flex justify-center items-center">
                {isOpen ? '✖️' : '☰'}
            </button>
        </div>
    </header>
      
    )
  }