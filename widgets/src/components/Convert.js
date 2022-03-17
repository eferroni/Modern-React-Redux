import React, {useEffect, useState} from "react";
import axios from "axios";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('')
    const [debounceText, setDebounceText] = useState(text)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebounceText(text);
        }, 500);

        return () => {
            clearTimeout(timeId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debounceText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debounceText]);

    return (
        <div className="ui header">
            {translated}
        </div>
    );
};

export default Convert;