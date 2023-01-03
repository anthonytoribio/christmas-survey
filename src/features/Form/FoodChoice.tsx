import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { LanguageManager } from "../../constants/strings";
import { firstChoiceClicked, secondChoiceClicked, thirdChoiceClicked } from "./formSlice";
import './FoodChoice.css';
import React from "react";



const FoodChoice = () => {
    const dispatch = useAppDispatch();
    const isEnglish = useSelector<RootState, boolean>((state)=>state.formSlice.isEnglish);
    const FoodQuestion = LanguageManager.FoodChoicesQDescription;
    const ChineseFoodText = LanguageManager.ChineseFood;
    const firstChoice = useSelector<RootState, string>((state)=> state.formSlice.firstChoice);;
    const secondChoice = useSelector<RootState, string>((state) => state.formSlice.secondChoice);;
    const thirdChoice = useSelector<RootState, string>((state) => state.formSlice.thirdChoice);

    const Row1Checked = (e: React.ChangeEvent<HTMLTableRowElement>) => {
        const choice: string = e.target.title;
        console.log("Row 1 selected: " + choice);
        dispatch(firstChoiceClicked(choice));
        if (choice === secondChoice || choice === thirdChoice) {
            alert("Please don't select more than one response per column");
        }
    }

    const Row2Checked = (e: React.ChangeEvent<HTMLTableRowElement>) => {
        const choice: string = e.target.title;
        console.log("Row 2 selected: " + choice);
        dispatch(secondChoiceClicked(choice));
        if (choice === firstChoice || choice === thirdChoice) {
            alert("Please don't select more than one response per column"); 
        }
    }

    const Row3Checked = (e: React.ChangeEvent<HTMLTableRowElement>) => {
        const choice: string = e.target.title;
        console.log("Row 3 selected: " + choice);
        dispatch(thirdChoiceClicked(choice));
        if (choice === firstChoice || choice === secondChoice) {
            alert("Please don't select more than one response per column"); 
        }
    }

    return (
        <div className="Food-choice-div">
            <div className="Food-question-div">{isEnglish? FoodQuestion.en : FoodQuestion.es}<span className="Asterik"> *</span></div>
            <div className="Food-titles-div">
                <table className="Food-table">
                    <tbody>
                    <tr className="Food-titles">
                        <td></td>
                        <td>Tamales</td>
                        <td >Pizza</td>
                        <td>Posole</td>
                        <td>Tacos (Carne Asada)</td>
                        <td>{isEnglish? ChineseFoodText.en : ChineseFoodText.es}</td>
                        <td>Pollo Loco (Pollo)</td>
                    </tr>
                    <tr className="Choice-row" onChange={Row1Checked}>
                        <th scope="row" className="Choice-header">Choice 1:</th>
                        <td><input name="first" type="radio" title="Tamales"></input></td>
                        <td><input name="first" type="radio" title="Pizza"></input></td>
                        <td><input name="first" type="radio" title="Posole"></input></td>
                        <td><input name="first" type="radio" title="Tacos"></input></td>
                        <td><input name="first" type="radio" title="Chinese Food"></input></td>
                        <td><input name="first" type="radio" title="Pollo Loco"></input></td> 
                    </tr>
                    <tr className="Choice-row" onChange={Row2Checked}>
                        <th scope="row" className="Choice-header">Choice 2:</th>
                        <td><input name="second" type="radio" title="Tamales"></input></td>
                        <td><input name="second" type="radio" title="Pizza"></input></td>
                        <td><input name="second" type="radio" title="Posole"></input></td>
                        <td><input name="second" type="radio" title="Tacos"></input></td>
                        <td><input name="second" type="radio" title="Chinese Food"></input></td>
                        <td><input name="second" type="radio" title="Pollo Loco"></input></td> 
                    </tr>
                    <tr className="Choice-row" onChange={Row3Checked}>
                        <th scope="row" className="Choice-header">Choice 3:</th>
                        <td><input name="third" type="radio" title="Tamales"></input></td>
                        <td><input name="third" type="radio" title="Pizza"></input></td>
                        <td><input name="third" type="radio" title="Posole"></input></td>
                        <td><input name="third" type="radio" title="Tacos"></input></td>
                        <td><input name="third" type="radio" title="Chinese Food"></input></td>
                        <td><input name="third" type="radio" title="Pollo Loco"></input></td> 
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default FoodChoice;