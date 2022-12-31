import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../store";
import { LanguageManager } from "../../constants/strings";
import { languageChanged, nextClicked } from "./formSlice";
import './Buttons.css';

const Buttons = () => {
    const dispatch = useAppDispatch();
    //Code for Langauge Button
    const isEnglish: boolean = useSelector<RootState, boolean>((state)=> state.formSlice.isEnglish)
    const languageButton = LanguageManager.LanguageButton;
    const onClickLanguage = () => dispatch(languageChanged())
    //End
    //Code for Next/Back Button
    const onNextPage: boolean = useSelector<RootState, boolean>((state)=> state.formSlice.nextClicked)
    const NextButton = LanguageManager.NextButton;
    const BackButton = LanguageManager.BackButton;
    const onClickNextBack = () => dispatch(nextClicked());
    //End
    //Code for Submit Button (shown on 2nd page)

    //End

    return (
        <div className="Button-div">
            <div className="Language-div">
                <button type="button" className="Language-button" onClick={onClickLanguage}>{isEnglish ? languageButton.en : languageButton.es}</button>
            </div>
            <div className="Next-back-div">
                <button type="button" className="Next-back-button" onClick={onClickNextBack}>{onNextPage? isEnglish? BackButton.en : BackButton.es : isEnglish? NextButton.en : NextButton.es}</button>
            </div>
        </div>
    );
}

export default Buttons;