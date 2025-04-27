// import DonateButton from './DonateButton'
import banner from "../public/banner.png"
// import Image from "next/image"
// import ImageLoader from './ImageLoader'; 

export default function Hero() {
  return (
    <section 
       className="min-h-screen flex items-center justify-center bg-gray-50 "
    >
        <div 
            className="absolute inset-0"
            style={{
            backgroundImage: `url(${banner.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
         <div className="absolute inset-0 bg-black/50" /> {/* 50% opacity black overlay */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center"> {/* Center container */}
          <div className="max-w-3xl w-full"> {/* Width control container */}
            <h1 className="text-6xl text-gray-100 font-bold mb-6">
              Make a Difference Today
            </h1>
            <div className="text-xl text-gray-200 mb-8 space-y-2">
              <span className="block">我們的使命，積極為全球社區創造的改變</span>
              <span className="block">Join us in our mission to create positive change in communities worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}