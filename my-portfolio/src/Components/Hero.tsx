import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className='h-auto'>
  <Navbar />
  
  {/* Main Container */}
  <div className="flex flex-col md:h-[800px]  lg:flex-row items-center h-full lg:h-[calc(100vh-60px)] mt-12 lg:mt-0 ">
    
    {/* Left Div: Image */}
    <div className="lg:w-1/2 w-full h-[300px]   lg:h-full bg-center bg-no-repeat bg-contain sm:bg-[60%] md:bg-[80%] lg:bg-[90%]" style={{ backgroundImage: "url('/image1.jpg')", backgroundSize:"65%"} }>
    </div>
    
    {/* Right Div: Text */}
    <div className="lg:w-1/2 w-full flex justify-center items-center text-center lg:text-left px-4 py-8">
      <div className="text-[60px] sm:text-[90px] font-bold leading-tight">
        <p>I'm</p>
        <p>Ibrahim</p>
        <p>Shahid</p>
      </div>
    </div>

  </div>
</div>


  );
};

export default Hero;
