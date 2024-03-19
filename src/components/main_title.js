import '../stylesheets/main_title.css'
import React from 'react';
import { useSpring, animated } from 'react-spring';
import ragnar from '../img/EMPIRE-OF-RAGNAR.png'

const MainTitle = () => {

    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(100px)' },
        config: { duration: 1000, tension: 200, friction: 20 },
    });

    return (
        <animated.div style={props}>
            <img
                src={ragnar}
                alt="Descripción de la imagen"
            />
        </animated.div>
    );
};

export default MainTitle