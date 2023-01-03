import React from 'react';
import Buttons from './Buttons';
import './Form.css';
import NameInput from './NameInput';
import FoodChoice from './FoodChoice';

const Form = () => {
    const formSubmit = (e:React.ChangeEvent<HTMLFormElement>) => e.preventDefault()
    return (
    <div className="Base-form">
        <form onSubmit={formSubmit}>
            <NameInput />
            <FoodChoice />
            <Buttons />
        </form>
    </div>
)};

export default Form;