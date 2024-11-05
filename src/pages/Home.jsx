import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  const images = [
    { id: 1, src: '/public/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/public/image2.jpg', alt: 'Image 2' },


    
    { id: 3, src: '/public/image3.jpg', alt: 'Image 3' },


    { id: 4, src: '/public/image4.jpg', alt: 'Image 4' },
  ];

  return (
    <div className="home-container">
      <h2>Welcome to Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>



            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;