// "use client"

// import { useState } from 'react';
// import Link from 'next/link'
// import ImageLoader from '../components/ImageLoader';

// export default function Navigation() {
//     // const navItems = [
//     //     { name: '關於我們', href: '/rockfall/about' },
//     //     // { name: '專案計畫', href: '/rockfall/projects' },
//     //     { name: '最新消息', href: '/rockfall/news' },
//     // ]
//     const navItems = [
//         { name: '關於落石黨', href: '/about' },
//         // { name: '專案計畫', href: '/rockfall/projects' },
//         { name: '最新動態', href: '/news' },
//     ]
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
  
//     return (
//     <header className="relative bg-rockfallLightMain flex">

//         <div className="container mx-auto flex justify-between items-center px-6">
//             <Link href="/" className="text-2xl font-bold text-primary">
//                 <div className="flex items-center">
                
//                     <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg"
//                         style={{
//                         backgroundImage: `url(${ImageLoader({ src: '/emblem.svg' })})`,
//                         backgroundSize: 'cover',
//                         // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
//                         backgroundPosition: 'center',
//                     }} />
//                     <div>
//                         <h1 className="text-xl font-bold text-intertidalDarkMain">落石黨</h1>
//                         <h1 className="text-lg font-bold text-intertidalDarkMain">Rockfall Party</h1>
//                     </div> 
                    
//                 </div>
//             </Link>
            
    
//             <nav className={`md:flex ${isOpen ? 'flex' : 'hidden'} md:static bg-rockfallLightMain`}>
                    
//                 <ul className="flex flex-col space-x-6 bg-rockfallLightMain ml-auto">
//                 {/* <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 text-intertidalDarkMain p-4"> */}
//                     {navItems.map((item) => (
//                         <li key={item.name}>
//                         <a 
//                             href={item.href}
//                             className="text-gray-600 hover:text-gray-900 transition-colors"
//                         >
//                             {item.name}
//                         </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//         <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-intertidalDarkMain text-4xl w-25 h-25 flex justify-center items-center">
//                 {isOpen ? '✖️' : '☰'}
//             </button>
//         </div>

//     </header>
      
//     )
//   }
"use client"

import { useState } from 'react';
import Link from 'next/link'
import ImageLoader from '../components/ImageLoader';

export default function Navigation() {
    const navItems = [
        { name: '關於落石黨', href: '/about' },
        { name: '最新動態', href: '/news' },
    ]
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <header className="relative bg-rockfallLightMain flex">

        <div className="container mx-auto flex justify-between items-center px-6">
            <Link href="/" className="text-2xl font-bold text-primary">
                <div className="flex items-center">
                
                    <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg"
                        style={{
                        backgroundImage: `url(${ImageLoader({ src: '/emblem.svg' })})`,
                        backgroundSize: 'cover',
                        // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
                        backgroundPosition: 'center',
                    }} />
                    <div>
                        <h1 className="text-xl font-bold text-intertidalDarkMain">落石黨</h1>
                        <h1 className="text-lg font-bold text-intertidalDarkMain">Rockfall Party</h1>
                    </div> 
                    
                </div>
            </Link>
            
    
            <nav className={`md:flex ${isOpen ? 'flex' : 'hidden'} md:static bg-rockfallLightMain`}>
                    
                <ul className="flex flex-col  md:flex-row space-x-6 bg-rockfallLightMain ml-auto">
                {/* <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 text-intertidalDarkMain p-4"> */}
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