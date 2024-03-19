import '../stylesheets/start.css'
import '../stylesheets/Minecraftero.css'
import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import clic from '../audio/minecraft menu click.mp3'



const StartButton = () => {

    const props = useSpring ( {
        opacity: 1,
        from: { opacity: 0},
        config: { duration: 3000, tension: 200, friction: 20 }
    })


    const [audio] = useState(new Audio(clic));

    const clicEdit = () => {
        audio.currentTime = 0.2
        audio.play()
    };

    return (

        <animated.div className='all_container' style={props}>
            <button onClick={clicEdit} className='start-background'>
                <div className='minecraftia-contorno' style={{fontSize: '80px', marginTop: '-25px'}}>
                    START
                </div>
            </button>
        </animated.div>
    );
};

export default StartButton

