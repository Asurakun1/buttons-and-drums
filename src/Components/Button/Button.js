import './Button.css';
import React, { useState, useEffect, useRef } from 'react';
const Button = (props) => {

    const assignKey = () => {
        let key;
        switch (props.id) {
            case 0:
                key = 'Q';
                break;
            case 1:
                key = 'W';
                break;
            case 2:
                key = 'E';
                break;
            case 3:
                key = 'A';
                break;
            case 4:
                key = 'S';
                break;
            case 5:
                key = 'D';
                break;
            case 6:
                key = 'Z';
                break;
            case 7:
                key = 'X';
                break;
            case 8:
                key = 'C';
                break;

            default:
        }
        return key;
    }
    const getKey = assignKey();

    const [active, setActive] = useState('');
    const [onPlus, setOnPlus] = useState('');
    const audioRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === getKey.toLocaleLowerCase()) {
                setActive('active');

                if (props.on) {
                    setOnPlus('on-plus');
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
            }
        }

        const handleKeyUp = (event) => {
            if (event.key === getKey.toLocaleLowerCase()) {
                setActive('');
                setOnPlus('');
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [getKey, props.on]);


    const [style, setStyle] = useState('');
    useEffect(() => {
        if (props.on) {
            setStyle('on');
        } else {
            setStyle({});
        }
    }, [props.on])


    const [sound, setSound] = useState('');

    useEffect(() => {
        switch (props.id) {
            case 0:
                setSound('/audio/Heater-1.mp3');
                break;
            case 1:
                setSound('/audio/Heater-2.mp3');
                break;
            case 2:
                setSound('/audio/Heater-3.mp3');
                break;
            case 3:
                setSound('/audio/Heater-4_1.mp3');
                break;
            case 4:
                setSound('/audio/Heater-6.mp3');
                break;
            case 5:
                setSound('/audio/Dsc_Oh.mp3');
                break;
            case 6:
                setSound('/audio/Kick_n_Hat.mp3');
                break;
            case 7:
                setSound('/audio/RP4_KICK_1.mp3');
                break;
            case 8:
                setSound('/audio/Cev_H2.mp3');
                break;

            default:
        }
    }, [sound, props.id])

    const handleDown = () => {

        if (props.on) {
            try{
                setOnPlus('on-plus');
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }catch(e){

            }
        }
    }

    const handleUp = () =>{
        setOnPlus('');
    }

    return (
        <button className={`${active} ${style} ${onPlus}`}
            onMouseDown={handleDown}
            onMouseUp={handleUp}
        >
            <h1>{getKey}</h1>
            <audio ref={audioRef} src={sound}></audio>
        </button>
    );
}

export default Button;