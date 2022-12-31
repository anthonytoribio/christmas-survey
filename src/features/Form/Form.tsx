import Buttons from './Buttons';
import './Form.css';
import NameInput from './NameInput';

const Form = () => {
    return (
    <div className="Base-form">
        <form>
            <NameInput />
            <Buttons />
        </form>
    </div>
)};

export default Form;