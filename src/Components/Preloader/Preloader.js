import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false); // Set loading to false once window has loaded
    });
  }, []);

  return loading ? (
    <div className="preloader">
      
      
    </div>
  ) : null;
};

export default Preloader;
