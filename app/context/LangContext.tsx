import { createContext, useState } from "react";

/* Контекст использован для перевода строк на рус и англ. 
    Я не смог корректно установить ни i18, ни решение от Expo (Expo.Navigation)
    Собственно, поэтому и был выбран контекст как способ решения*/

interface ILangContext {
    currLang: string
    setEng: () => void
    setRus: () => void
}

export const LangContext = createContext<ILangContext>({
    currLang: "",
    setEng: () => {},
    setRus: () => {},
})

export const LangState = ({ children }: {children: React.ReactNode}) => {

    const [currLang, setCurrLang] = useState("ru");

    const setEng = () => setCurrLang("en")
    const setRus = () => setCurrLang("ru")


    return (
        <LangContext.Provider value={{ currLang, setEng, setRus }}>
            {children}
        </LangContext.Provider>
    )
}