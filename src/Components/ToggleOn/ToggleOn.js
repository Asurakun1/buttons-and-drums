import './ToggleOn.css';
const ToggleOn = (props) => {
    const onOff = () => {
        if(props.visibility){
            return ({
                visibility: `visible`,
            });
        }else{
            return ({
                visibility: `hidden`,
            });
        }
    }
    return(
        <button
            className={`toggle ${props.id}`}
            onClick={props.onClick}
            style={onOff()}
             >{props.id}
        </button>
    );
}

export default ToggleOn;