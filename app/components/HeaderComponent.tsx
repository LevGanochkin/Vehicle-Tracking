import React, { FC, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { stylesToExport } from '../styles/Styles';
import ButtonComponent from './ButtonComponent';
import { IHeader } from '../models/interfaces';
import { LangContext } from '../context/LangContext';
import translations from '../utils/Languages';

/* Тут в Header завернуты самописные кнопки для проброса state через пропсы,
    изменение его через on"Event"/handle"Event" и проброс колбэком обратно. */

const HeaderComponent: FC<IHeader> = (props) => {
    const {currLang} = useContext(LangContext);
    const localization = translations[currLang];

    const [filter, setFilter] = useState("");

    const handlePress = (category: string) => {
        if (filter == category) {
            setFilter("")
        } else {
            setFilter(category)
        }
        props.onDataUpdate(filter)
    }

    useEffect(() => {
        props.onDataUpdate(filter)
    }, [filter])

    return (
        <View style={stylesToExport.headerViewContainer}>
            <ButtonComponent title={localization.vehicleType.truck} onPress={() => handlePress(translations.en.vehicleType.truck)} />
            <ButtonComponent title={localization.vehicleType.passenger} onPress={() => handlePress(translations.en.vehicleType.passenger)} />
            <ButtonComponent title={localization.vehicleType.special} onPress={() => handlePress(translations.en.vehicleType.special)} />
        </View>
    );
};

export default HeaderComponent;

