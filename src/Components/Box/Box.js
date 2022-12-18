import './Box.css';
import Button from '../Button/Button';
import ToggleSection from '../ToggleSection/ToggleSection';
import React, {useState} from 'react';

const Box = () => {
    const [toggleOn, setToggleOn] = useState(true);
    const [toggleOff, setToggleOff] = useState(false);

    const makeNineButtons = () => {
        const buttonArray = [];
        const counter = 9;
        for(let i = 0; i < counter; i++){
            buttonArray.push(<Button key={i} id={i} on={toggleOff} off={toggleOn}></Button>);
        }

        return buttonArray;
    }

    return(
        <div className='box'>
            <div className='inner-box'>
                <ToggleSection 
                    toggleOn={setToggleOn}
                    toggleOff={setToggleOff}
                    visibleOn={toggleOn}
                    visibleOff={toggleOff}


                    />
                <div className='inner-inner-box'>
                {
                    makeNineButtons().map(button => button)
                }
                </div>
            </div>
        </div>
    );
}

export default Box;