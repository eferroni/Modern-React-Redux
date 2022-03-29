import React, {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
    const contextType = useContext(LanguageContext);
    const color = useContext(ColorContext);

    return(
        <>
            <ColorContext.Consumer>
                {(colorValue) => 
                    <button className="ui button primary" style={{backgroundColor: colorValue}}>
                        {contextType.language === 'english' ? 'Submit' : 'Voorleggen'}
                    </button>
                }
            </ColorContext.Consumer>
        </>
    );
};

export default Button;