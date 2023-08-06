import React, { useState } from 'react';

function ImageWithLoading({ src, alt, style }:any) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="w-full h-60 bg-gray-200 animate-pulse"></div>}
      <img
        src={src}
        alt={alt}
        style={style}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
}

export default ImageWithLoading;
