import { useSelector } from 'react-redux';
import './Header.css';
import React from 'react';
import { RootState } from '../../store';
import { LanguageManager } from '../../constants/strings';

// class Header extends React.Component {

//     render() {
//         return (
//             <div className="Header">
//                 <div className='Title'>Christmas Survey Form</div>
//                 <div className="Description">Description</div>
//             </div>
//         ); 
//     }
// }

const Header = () => {
    const isEnglish: boolean = useSelector<RootState, boolean>((state) => state.formSlice.isEnglish);
    const HeaderTitle = LanguageManager.HeaderTitle;
    const Description = LanguageManager.Description;
    return (
        <div className="Header">
            <div className='Title'>{isEnglish ? HeaderTitle.en : HeaderTitle.es}</div>
            <div className="Description">{isEnglish ? Description.en : Description.es}</div>
         </div>
        );  
};


export default Header;