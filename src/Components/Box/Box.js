import './Box.css';
import Button from '../Button/Button';

const Box = () => {
    const makeNineButtons = () => {
        const buttonArray = [];
        const counter = 9;
        for(let i = 0; i < counter; i++){
            buttonArray.push(<Button key={i} id={i}></Button>);
        }

        return buttonArray;
    }

    return(

        <div className='box'>
            <div className='inner-box'>
            
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