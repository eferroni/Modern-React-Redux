import React, {useContext} from "react";
import Context from "../contexts/LanguageContext";

const LanguageSelector = (props) => {
    const contextType = useContext(Context);

    return (
        <div>
            Select a language: 
            <i className="flag us" onClick={() => contextType.onLanguageChange('english')}/>
            <i className="flag nl" onClick={() => contextType.onLanguageChange('dutch')}/>
        </div>
);
};

export default LanguageSelector;