import React from "react";

const FloodText = () => {
  const waveWidth = 1400;

  return (
    <div style={{ width: "100%", textAlign: "center",margin:'auto' }}>
      <svg viewBox={`0 0 ${waveWidth} 160`} width="100%" height="100">
        <defs>
          <clipPath id="clip-text">
            <text
              x="100"
              y="110"
              fontSize="80"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              WEB TOOL FOR DESIGN FLOOD
            </text>
          </clipPath>

          <path
            id="wave"
            d="
              M0 30 
              Q 50 0, 100 30 
              T 200 30 
              T 300 30 
              T 400 30 
              T 500 30 
              T 600 30 
              T 700 30 
              T 800 30 
              T 900 30 
              T 1000 30 
              T 1100 30 
              T 1200 30 
              T 1300 30 
              T 1400 30 
              T 1500 30 
              T 1600 30 
              T 1700 30 
              T 1800 30 
              T 1900 30 
              T 2000 30 
              V160 H0 Z"
          />
        </defs>

        {/* Static Text Outline */}
        <text
          x="100"
          y="110"
          fontSize="80"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="none"
          stroke="#00bfff"
          strokeWidth="2"
        >
          WEB TOOL FOR DESIGN FLOOD
        </text>

        <g clipPath="url(#clip-text)">
          <rect width="100%" height="160" fill="#E6F7FF" />

          {/* Wave 1 */}
          <use href="#wave" fill="#007BFF" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 60"
              to={`-${waveWidth} 60`}
              dur="8s"
              repeatCount="indefinite"
            />
          </use>

          {/* Wave 2 (follows right behind Wave 1) */}
          <use href="#wave" fill="#007BFF" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              from={`${waveWidth} 60`}
              to="0 60"
              dur="8s"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
};

export default FloodText;
