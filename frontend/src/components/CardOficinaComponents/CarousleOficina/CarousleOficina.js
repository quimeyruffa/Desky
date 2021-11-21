import React from 'react';
import { Carousel } from 'react-carousel-minimal';
const data = [
    {
      image: "",
      caption: "Oficina"
    },
    {
      image: "",
      caption: "Oficina Privada"
    },
    {
      image: "",
      caption: "Meeting room"
    },
    {
      image: "",
      caption: "Open Space"
    },
    {
      image: "",
      caption: "Amenities"
    },
    {
      image: "",
      caption: "Persona Laburando arduamente"
    },
    {
      image: "",
      caption: "Tipica foto de dos individuos charlando sobre algo en la pantalla"
    },
    {
      image: "",
      caption: "Persona con cafe"
    },
    {
      image: "",
      caption: "Persona con te"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>Nombre de oficina aqui</h1>
        <p>Aqui va la direccion del lugar!</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="30px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
export default CarouselOficina;