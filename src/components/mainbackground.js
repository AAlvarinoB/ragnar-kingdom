import React, { useState, useEffect } from 'react';
import '../stylesheets/main.css'
import background from '../wallpapers/background.png'
import background1 from '../wallpapers/background1.png'
import background2 from '../wallpapers/background2.png'
import background3 from '../wallpapers/background3.png'
import background4 from '../wallpapers/background4.png'
import background5 from '../wallpapers/background5.png'


const MainBackground = () => {
    const [imagenActual, setImagenActual] = useState('');
    const [transitioning, setTransitioning] = useState(false);


    useEffect(() => {
        const imagePaths = [background, background1, background2, background3, background4, background5];

        const randomImage = () => {
            setTransitioning(true);
            setTimeout(() => {
                const imagenAleatoria = imagePaths[Math.floor(Math.random() * imagePaths.length)];
                setImagenActual(imagenAleatoria);
                setTransitioning(false);
            }, 500);
        }
            randomImage();

            const interval = setInterval(randomImage, 2000);
            return () => clearInterval(interval);
    }, []);

    return (
        <div className='background_container'>
            <div className='background_char'
                 style={{
                     backgroundImage: `url(${imagenActual})`,
                     opacity: transitioning ? 0 : 1, // Establece la opacidad mientras se realiza la transición
                 }}>
            </div>
        </div>
    );
};
export default MainBackground;
