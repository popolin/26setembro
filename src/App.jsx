import './App.css';
import { useMemo, useState } from 'react';

const photos = [
  './img/b_2.png',
  './img/b_3.png',
  './img/b_1.png',
];

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // const [opacity, setOpacity] = useState(1);

  const currentPhoto = useMemo(() => {
    return photos[currentPhotoIndex];
  }, [currentPhotoIndex]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentPhotoIndex((current) => {
  //       console.log({
  //         current,
  //         len: photos.length,
  //         next: (current + 1) === photos.length ? 0 : current + 1,
  //       });
  //       return (current + 1) === photos.length ? 0 : current + 1;
  //     });
  //   }, 4000); // Mudar a cada 4 segundos
  // })

  return (
    <>
      <div className="container">
        <h1>Em Memória de Branquinho</h1>
        <div id="highlightedPhoto" className="highlighted-photo">
            <img
              src={currentPhoto}
              style={{
                // width: 700,
              }}
              alt="Destaque" />
            <div className="message">
              Nos despedimos de um amigo fiel, que tinha um olhar carinhoso e adorava crianças. Após 15 anos ele viu várias pessoas chegando e outras partindo, sentiremos muito a sua falta. Descanse em paz, querido companheiro.
            </div>
        </div>
        <div className="thumbnail-gallery">
          { photos.map((photo, index) => (
            <div
              key={index}
              className="thumbnail"
              style={{
                backgroundImage: `url('${photo}')`
              }}
              onClick={() => setCurrentPhotoIndex(index)}
            />
          ))}

        </div>
        <div className="footer">
            Para sempre lembrado
        </div>
      </div>
    </>
  );
}

export default App;