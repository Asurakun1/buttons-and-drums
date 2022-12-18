import './ToggleSection.css';
import ToggleOn from '../ToggleOn/ToggleOn';
const ToggleSection = (props) => {

    return(
        <section className='toggle-section'>
            <ToggleOn id="On" 
                visibility={props.visibleOn}
                onClick={props.toggle}/>
            <ToggleOn id="Off" 
                visibility={props.visibleOff}
                onClick={props.toggle} />
        </section>
    );
}

export default ToggleSection;