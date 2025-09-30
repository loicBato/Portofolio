// import React, { useRef } from 'react';
import { useOnScreen } from '../../Hooks/useOnScreen';
import './AnimatedSection.css';

const AnimatedSection = ({ children, className = '', delay = '0ms' }) => {
  const [ref, isVisible] = useOnScreen({
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${className} ${isVisible ? 'visible' : 'hidden'}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;