// FadeInComponent.js
import React, { useState, useEffect, ReactNode } from 'react';

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>{children}</div>
  );
};

export default FadeInComponent;
