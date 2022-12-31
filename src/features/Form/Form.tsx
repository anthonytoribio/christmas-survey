import React from 'react';
import Buttons from './Buttons';
import './Form.css';
import NameInput from './NameInput';

const Form = () => {
    const formSubmit = (e:React.ChangeEvent<HTMLFormElement>) => e.preventDefault()
    return (
    <div className="Base-form">
        <form onSubmit={formSubmit}>
            <NameInput />
            <Buttons />
        </form>
    </div>
)};

export default Form;