import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../store";
import { LanguageManager } from "../../constants/strings";
import { languageChanged } from "./formSlice";

const Buttons = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            
        </div>
    );
}

export default Buttons;