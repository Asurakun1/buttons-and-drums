import './ToggleSection.css';
import ToggleOn from '../ToggleOn/ToggleOn';
const ToggleSection = (props) => {

    const toggleButton = () => {
        if(props.visibleOn){
            props.toggleOn(false);
            props.toggleOff(true);
        }else{
            props.toggleOn(true);
            props.toggleOff(false);
        }
    }
    return(
        <section className='toggle-section'>
            <ToggleOn id="On" 
                visibility={props.visibleOn}
                onClick={toggleButton}/>
            <ToggleOn id="Off" 
                visibility={props.visibleOff}
                onClick={toggleButton} />
        </section>
    );
}

export default ToggleSection;