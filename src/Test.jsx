import React, { useState, useEffect } from 'react';
import './Test.css';
import { Link } from 'react-router-dom';
import data from '../Data/data';
import NavBar from './NavBar';

const Test = () => {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const nextProject = () => {
    setAnimateTitle(true);
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % data.length);
      setProgress(0);
      setAnimateTitle(false);
      setShowOverlay(false);
    }, 500); // Duration of the title animation
  };

  const previosProject = () => {
    setAnimateTitle(true);
    setShowOverlay(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setProgress(0);
      setAnimateTitle(false);
      setShowOverlay(false);
    }, 500); // Duration of the title animation
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100); // Adjust the speed of progress bar increment

    if (progress === 100) {
      nextProject();
    }

    return () => clearInterval(interval);
  }, [progress, isHovered]);

  return (
    <>
   <NavBar/>
    <div
      className="carousel-container bg-cover bg-center flex-grow text-white pt-16"
      style={{
        backgroundImage: `url(${data[currentProjectIndex].mainImage})`,
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
     
      <div className=" z-50 absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="  px-2.5 w-[60px] bg-[#202020] font-sans sm:w-[100px] h-[60px]"
          onClick={previosProject}
        >
          <span className="block md:hidden">{'<'}</span>
          <span className="hidden md:block">
            Previos <br /> Project
          </span>
        </button>
      </div>
      <div className=" z-50 absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className=" z-50 px-2.5 w-[60px] bg-[#202020] text-white font-sans sm:w-[100px] h-[60px]"
          onClick={nextProject}
        >
          <span className="block md:hidden">{'>'}</span>
          <span className="hidden md:block">
            Next <br /> Project
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center flex-grow z-50 pt-10">
        <div className="flex flex-col items-center text-center">
          <h2
            className={`text-3xl sm:text-8xl text-white hover:underline ${animateTitle ? 'animate-title' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to={`/${data[currentProjectIndex].name}`}>
              {data[currentProjectIndex].name}
            </Link>
          </h2>
          <h4 className={`mt-4 sm:mt-8 font-sans font-semibold uppercase ${animateTitle ? 'animate-title' : ''}`}>
            By Blackleaf Properties
          </h4>
          <Link to={`/${data[currentProjectIndex].name}`} className={`btn mt-4 sm:mt-8 ${animateTitle ? 'animate-title' : ''}`}>
            Know more
          </Link>
          <h3 className="text-xl sm:text-3xl mt-10 sm:mt-20">
            {currentProjectIndex + 1}/{data.length}
          </h3>
        </div>
      </div>
      <div
        className="progress-bar-container z-30"
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
      >
        <div
          className="progress-bar "
          style={{
            height: '8px',
            background: '#cc9964',
            width: `${progress}%`,
            transition: 'width 0.1s',
          }}
        />
      </div>
      <div className="overlay"></div>
    </div>
    </>
  );
};

export default Test;
