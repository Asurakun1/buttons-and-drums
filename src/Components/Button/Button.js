import './Button.css';

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
    return (
        <button>
            <h1>{assignKey()}</h1>
        </button>
    );
}

export default Button;