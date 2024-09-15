import React from 'react';

function Logo({width = '100px'}) {
  const logoStyle = {
    width,
    height: width, // Make it a square
    backgroundColor: '#333333', 
    borderRadius: '50%', // Circular shape
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // White text
    fontWeight: 'bold',
    fontSize: '1.4rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Soft shadow
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Smooth hover effect
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      style={logoStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Blogit
    </div>
  );
}

export default Logo;
