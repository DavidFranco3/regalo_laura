
import DragonxUnicornio from "../src/images/dragonxunicornio.jpeg";
import GatoxTortuga from "../src/images/gatoxtortuga.jpg";
import Imagen1 from "../src/images/imagen1.jpeg";
import Imagen2 from "../src/images/imagen2.jpeg";
import Imagen4 from "../src/images/imagen4.jpeg";
import Imagen3 from "../src/images/imagen3.jpeg";
import Imagen5 from "../src/images/imagen5.jpeg";
import Imagen6 from "../src/images/imagen6.jpeg";
import Imagen7 from "../src/images/imagen7.jpg";
import Imagen8 from "../src/images/imagen8.jpeg";
import React, { useState } from 'react';
import Heart from "./components/heart";

// Componente para mostrar una foto individual
const Photo = ({ src, alt, message }) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={src} alt={alt} />
        <p style={{ marginLeft: '10px' }}>{message}</p>
      </div>
    </div>
  );
};

// Componente para mostrar el álbum de fotos completo
const Album = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleClickNext = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(nextIndex);
  };

  const handleClickPrev = () => {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex(prevIndex);
  };

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div>
      <div>
        <button onClick={handleClickPrev}>{'<'}</button>
        <button onClick={handleClickNext}>{'>'}</button>
      </div>
      <Photo src={currentPhoto.src} alt={currentPhoto.alt} message={currentPhoto.message} />
    </div>
  );
};

// Datos de ejemplo para el álbum de fotos
const albumData = [
  {
    src: DragonxUnicornio,
    alt: 'Descripción de la foto 1',
    message: 'Nuestra version 🥵, me encontre el dibujo cuando navegaba en internet, me hubiera gustado dibujartelo yo, pero el dibujo no se me da :v ',
  },
  {
    src: GatoxTortuga,
    alt: 'Descripción de la foto 2',
    message: 'Ahora un vistazo a nuestra version tierna 🥰',
  },
  {
    src: Imagen1,
    alt: 'Descripción de la foto 3',
    message: 'El momento exacto en el que cupido me flecho',
  },
  {
    src: Imagen3,
    alt: 'Descripción de la foto 4',
    message: 'El primer traje que compartimos (este es el mio, el tuyo no lo encontre :v, creo que debieron entregartelo despues de que me sali de tienda)',
  },
  {
    src: Imagen2,
    alt: 'Descripción de la foto 5',
    message: 'El dia en el que decidi enfrentar mi miedo, y confesarte mis sentimientos',
  },
  {
    src: Imagen4,
    alt: 'Descripción de la foto 6',
    message: 'El dia en el que decidi enfrentar mi miedo, y confesarte mis sentimientos, segunda parte',
  },
  {
    src: Imagen5,
    alt: 'Descripción de la foto 7',
    message: 'La medalla que gane en las olimpiadas, la gane gracias a que estaba motivado gracias a ti',
  },
  {
    src: Imagen6,
    alt: 'Descripción de la foto 8',
    message: 'Cuando nos reconciliamos despues nuestra primera (y espero unica) pelea que hemos tenido',
  },
  {
    src: Imagen7,
    alt: 'Descripción de la foto 9',
    message: 'Hoy es un dia especial, pues es tu cumpleaños, te amo mi amor, eres lo mejor que me a pasado, no quiero que nunca te vayas de mi lado, haz sido mi motor casi desde que entre a kazoku, eres una lider increible que nos a guiado a ganar 9 copas, pero sobre todo eres una persona maravillosa y unica, no cambies nunca el como eres mi amor, espero que este dia, te la pases increible al lado de tus seres queridos y espero que sigas cumpliendo muchos años mas'
  },
  {
    src: Imagen8,
    alt: 'Descripción de la foto 10',
    message: 'Hoy ademas, de ser un dia tan especial por tu cumpleaños, tambien es un dia especial porque es el dia de nuestra boda, se que es de "mentiritas", pero espero que algun dia no tan lejano pueda ser de verdad, a partir de mañana, seras la princesa de los saiyajin'
  }
];


// Componente principal de la aplicación
const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>¡Feliz cumpleaños, Laura!</h1>
          <p>Esta página es un regalo especial para ti.</p>
        </header>
        <main>
          <Heart />
        </main>
        <footer>
          <p>Con amor, David</p>
        </footer>
      </div>
      <div>
        <h1>Nuestros mejores momentos</h1>
        <Album photos={albumData} />
      </div>
    </>
  );
};

export default App;
