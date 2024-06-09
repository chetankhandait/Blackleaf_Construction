import React, { useState, useEffect } from 'react';
import './Test.css';
import  {Link}  from 'react-router-dom';
import data from '../Data/data';
const images = [
  'https://richlanddubai.com/wp-content/uploads/2017/07/cover-2.jpg',
  'https://richlanddubai.com/wp-content/uploads/2017/07/cover-1.jpg',
  'https://richlanddubai.com/wp-content/uploads/2017/07/serena-Bella-Casa-Image-1.jpg',
];

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100); // Adjust the speed of progress bar increment

    if (progress === 100) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [progress, isHovered]);

  return (
    <div
      className="carousel-container bg-cover bg-center flex-grow text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        height: '100vh',
        width: '100%'
      }}
    >
      <div className='absolute top-1/2 left-0'>
        <button className='px-2.5 w-[100px] h-[60px] bg-[#202020] font-sans'>
          Next <br/> Project
        </button>
      </div>
      <div className='absolute top-1/2 right-0'>
        <button className='px-2.5 w-[100px] h-[60px] bg-[#202020] text-white font-sans'>
          Previous <br/> Project
        </button>
      </div>
      <div className='flex items-center justify-center h-full'>
        <div className='flex flex-col items-center mt-[11.1rem]'>
          <h2
            className='text-7xl text-white hover:underline'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to={`seperate/${data[0].id}`} >TOWN SQUARE</Link>
          </h2>
          <h4 className='mt-8 font-sans font-semibold uppercase'>
            By Blackleaf Properties
          </h4>
          <Link to={`/seperate`} className="btn"  >Know more</Link>
          <h3 className='text-3xl mt-20'>01/13</h3>
        </div>
      </div>
      <div className="progress-bar-container" style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <div
          className="progress-bar"
          style={{
            height: '5px',
            background: '#cc9964',
            width: `${progress}%`,
            transition: 'width 0.1s'
          }}
        />
      </div>
    </div>
  );
}

export default Test;
