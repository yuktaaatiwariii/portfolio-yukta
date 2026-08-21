import React, { useState, useEffect, useRef } from 'react';
import ProjectVideo from './ProjectVideo';
import ProjectNavigation from './ProjectNavigation';
import { projectsData } from './projectsData';

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const totalProjects = projectsData.length;
  const duration = 5000; // 5 seconds
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const progressRef = useRef(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
    resetTimer();
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    resetTimer();
  };

  const resetTimer = () => {
    setProgress(0);
    progressRef.current = 0;
    startTimeRef.current = performance.now();
  };

  // Timer animation loop using requestAnimationFrame for smooth progress
  useEffect(() => {
    let animationFrameId;

    const animateProgress = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      if (!isHovered) {
        const elapsed = timestamp - startTimeRef.current;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);
        
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          goToNext();
        }
      } else {
        // If hovered, pause the timer by pushing the start time forward
        startTimeRef.current = timestamp - (progress * duration) / 100;
      }

      animationFrameId = requestAnimationFrame(animateProgress);
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex, isHovered]);

  const getPosition = (index) => {
    if (index === activeIndex) return 'main';
    
    // Calculate the left project (previous)
    const leftIndex = (activeIndex - 1 + totalProjects) % totalProjects;
    if (index === leftIndex) return 'left';
    
    // Calculate the right project (next)
    const rightIndex = (activeIndex + 1) % totalProjects;
    if (index === rightIndex) return 'right';

    // Calculate far-left project
    const farLeftIndex = (activeIndex - 2 + totalProjects) % totalProjects;
    if (index === farLeftIndex) return 'far-left';

    // Calculate far-right project
    const farRightIndex = (activeIndex + 2) % totalProjects;
    if (index === farRightIndex) return 'far-right';

    return 'hidden'; // For any remaining projects > 5
  };

  return (
    <div 
      className="relative mb-40 w-full h-[110vh] flex items-center justify-center "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 w-6xl h-full flex justify-center mt-10 ">
        {projectsData.map((project, index) => {
          const position = getPosition(index);
          if (position === 'hidden' && projectsData.length > 5) return null; // Only render visible for performance if needed
          
          return (
            <ProjectVideo 
              key={project.id}
              project={project}
              position={position}
              isHovered={isHovered}
              setHovered={setIsHovered}
            />
          );
        })}
      </div>

      <ProjectNavigation 
        total={totalProjects}
        current={activeIndex}
        onNext={goToNext}
        onPrev={goToPrev}
        progress={progress}
      />
    </div>
  );
}
