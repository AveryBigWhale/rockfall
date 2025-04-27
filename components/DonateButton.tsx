type DonateButtonProps = {
    size?: 'small' | 'large'
  }
  
  export default function DonateButton({ size = 'small' }: DonateButtonProps) {
    const buttonClasses = size === 'large' 
      ? 'px-8 py-4 text-lg'
      : 'px-6 py-2 text-base'
  
    return (
      <button 
        className={`
          ${buttonClasses}
          bg-blue-600 
          text-white 
          rounded-full 
          hover:bg-blue-700 
          transition-colors
        `}
      >
        Donate Now
      </button>
    )
  }