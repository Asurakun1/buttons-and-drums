import './ToggleSection.css';
import ToggleOn from '../ToggleOn/ToggleOn';
import React, {useRef} from 'react';
const ToggleSection = (props) => {

    const audioRef = useRef(null);
    const audioSource = "/audio/switch-8.wav";
    const toggleButton = () => {
        if(props.visibleOn){
            props.toggleOn(false);
            props.toggleOff(true);
        }else{
            props.toggleOn(true);
            props.toggleOff(false);
        }
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }
    return(
        <section className='toggle-section'>
            <ToggleOn id="On" 
                visibility={props.visibleOn}
                onClick={toggleButton}/>
            <ToggleOn id="Off" 
                visibility={props.visibleOff}
                onClick={toggleButton} />
            <audio ref={audioRef} src={audioSource}></audio>
        </section>
    );
}

export default ToggleSection;