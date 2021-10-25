import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FondoCarousel from '../../../assets/images/fondoCarousel.png'
const items = [
  {
    
    altText: 'Testimonios',
    caption: 'Trabajando con los mejores de la industria'
  },
  {
    altText: 'Testimonios',
    caption: 'Trabajando con los mejores de la industria'
  },
  {
    altText: 'Testimonios',
    caption: 'Trabajando con los mejores de la industria'
  }
];

const CarouselComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        <img src={FondoCarousel} width="100%" alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
      
    <Carousel
    
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default  CarouselComponent;