import { ColourfulText } from '../../components/colourful-text';
import { DiagonalSwipeButton } from '../../components/neonBtn/neon-btn';
import './hero.css';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-1" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://driveflow.dk/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-2"></div>
      
      <div className="relative z-3 text-center text-white px-5 max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-8 leading-tight hero-title-shadow">
          Turn Your <br className='md:hidden' /> <ColourfulText text='Driving School'/> <br className='md:hidden' /> Into a Fully Automated Business
        </h1>
        <DiagonalSwipeButton text="Join Driveflow" />
      </div>
    </section>
  );
}
