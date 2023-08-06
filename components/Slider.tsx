import React from 'react'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ImageWithLoading from './ImageWithLoading';
import Image from 'next/image';

const fadeImages = [
    {
      url: '/child1.jpeg',
      
    },
    {
      url: '/child2.jpeg',
      
    },
    {
      url: '/child3.jpeg',
    },
  ];

const Slider = () => {
  return (
    <div className="slide-container inset-x-[10rem]">
    <Fade>
      {fadeImages.map((fadeImage, index) => (
        <div className='flex justify-center' key={index}>
          <Image width={700} height={500} alt="child" src={fadeImage.url} />
        </div>
      ))}
    </Fade>
  </div>
  )
}

export default Slider