import React, { FC } from 'react';
import { View } from 'react-native';
import { stylesToExport } from '../styles/Styles';
import translations from '../utils/Languages';
import { useContext } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { LangContext } from '../context/LangContext';

/* Настройки языка. Контекст меняется только здесь*/

const SettingsScreen: FC = () => {

    const {currLang, setEng, setRus} = useContext(LangContext)

    const localization = translations[currLang]
    
    return (
        <View style={stylesToExport.settingsScreen}>
            <ButtonComponent title={localization.settings.engTitle} onPress={setEng} />
            <ButtonComponent title={localization.settings.ruTitle} onPress={setRus} />
        </View>
    );
};

export default SettingsScreen;
