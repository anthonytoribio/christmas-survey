import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { LanguageManager } from "../../constants/strings";
import {nameEntered} from './formSlice'
import './NameInput.css';
import React from "react";

const NameInput = () => {
    const nameQDescription = LanguageManager.NameQDescription;
    const isEnglish: boolean = useSelector<RootState, boolean>((state) => state.formSlice.isEnglish);
    const dispatch = useAppDispatch();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(nameEntered(e.target.value));

    return (
        <div className="Base">
            <div className="Question">{isEnglish ? nameQDescription.en : nameQDescription.es}<span className="Asterik"> *</span></div>
            <div className="Input">
                <input type="text" id="nameID" className="Name-text" required onChange={handleInputChange}></input>
            </div>
        </div>
    );

}

export default NameInput;