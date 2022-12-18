import './Button.css';
import React, {useState, useEffect} from 'react';

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
    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === getKey.toLocaleLowerCase()){
                setActive('active');
            }
        }

        const handleKeyUp = (event) => {
            if(event.key === getKey.toLocaleLowerCase()){
                setActive('');
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    },[getKey]);


    const [style, setStyle] = useState('');
    useEffect(() => {
        if(props.on){
            setStyle('on');
        }else{
            setStyle({});
        }
    }, [props.off, props.on])

    const handleClick = () =>{

    }
    return (
        <button className={`${active} ${style}`}
            onClick={handleClick}
            >
            <h1>{getKey}</h1>
        </button>
    );
}

export default Button;