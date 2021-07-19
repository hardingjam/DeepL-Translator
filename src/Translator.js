import { useState } from "react";
import axios from "axios";
import APIKey from "./apikey";
import "./Translator.css";

export default function Translator() {
    const targetLanguages = [
        { code: null, name: "Select target language" },
        { code: "BG", name: "Bulgarian" },
        { code: "CS", name: "Czech" },
        { code: "DA", name: "Danish" },
        { code: "DE", name: "German" },
        { code: "EL", name: "Greek" },
        { code: "EN-GB", name: "English (British)" },
        { code: "EN-US", name: "English (American)" },
        { code: "ES", name: "Spanish" },
        { code: "ET", name: "Estonian" },
        { code: "FI", name: "Finnish" },
        { code: "FR", name: "French" },
        { code: "HU", name: "Hungarian" },
        { code: "IT", name: "Italian" },
        { code: "JA", name: "Japanese" },
        { code: "LT", name: "Lithuanian" },
        { code: "LV", name: "Latvian" },
        { code: "NL", name: "Dutch" },
        { code: "PL", name: "Polish" },
        { code: "PT-PT", name: "Portuguese (Non-Brazilian)" },
        { code: "PT-BR", name: "Portuguese (Brazilian)" },
        { code: "RO", name: "Romanian" },
        { code: "RU", name: "Russian" },
        { code: "SK", name: "Slovak" },
        { code: "SL", name: "Slovenian" },
        { code: "SV", name: "Swedish" },
        { code: "ZH", name: "Chinese" },
    ];
    const [text, setText] = useState("Which way is the train station?");
    const [language, setLanguage] = useState("");
    const [errors, setErrors] = useState([]);
    const [translation, setTranslation] = useState("");
    const key = APIKey();

    const possErrors = {
        noLang: "Please choose a language",
        noText: "Enter some text to translate",
    };

    function handleChange(e) {
        if (e.target.name === "text-area") {
            setText(e.target.value);
        }
        if (e.target.name === "select-lang") {
            setLanguage(e.target.value);

            if (language !== "Select target language") {
                setErrors([]);
            }
        }
    }

    function handleClick() {
        console.log("lang", language);
        if (!language || language === "Select target language") {
            if (!errors.includes(possErrors.noLang)) {
                setErrors([...errors, possErrors.noLang]);
            }
            return;
        }
        if (!text) {
            if (!errors.includes(possErrors.noText)) {
                setErrors([...errors, possErrors.noText]);
            }
            return;
        } else {
            setErrors([]);
            axios
                .post(
                    `https://api-free.deepl.com/v2/translate?auth_key=${key}&text=${text}&source_lang=EN&target_lang=${language}`
                )
                .then(({ data }) => setTranslation(data.translations[0].text));
        }
    }

    return (
        <div className="Translator-Container">
            <div className="Translator">
                <div className="Text-Areas">
                    <textarea
                        name="text-area"
                        value={text}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        className="text-area"
                    />
                    <textarea
                        name="translation-area"
                        value={translation}
                        className="text-area"
                        readOnly
                    />
                </div>

                <select
                    name="select-lang"
                    value={language}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                >
                    {targetLanguages.map((lang, i) => (
                        <option key={i} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <button className="submit-button" onClick={handleClick}>
                    Translate
                </button>
                {errors && (
                    <div className="errors">
                        {errors.map((error, i) => (
                            <p key={i}>{error}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
