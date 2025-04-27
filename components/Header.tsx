import Navigation from './Navigation'
// import Link from 'next/link'
// // import DonateButton from './DonateButton'
// import ImageLoader from '../components/ImageLoader'; // Adjust the path as necessary

export default function Header() {
  return (
    <header className="fixed w-full bg-ufoundationLightMain z-50">
      <div className="container mx-auto px-4 py-4 ">
        
        
        <Navigation />
        {/* <DonateButton /> */}
      </div>
    </header>
  )
}