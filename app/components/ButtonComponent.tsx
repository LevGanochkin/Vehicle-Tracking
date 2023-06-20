import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { IButtonComponentProps } from '../models/interfaces';
import { stylesToExport } from '../styles/Styles';

/* Самописный компонент кнопки
    Во первых, поддается нормальной стилизации.
    Во вторых, onPress в HeaderComponent не ругается на типы данных  */

const ButtonComponent: FC<IButtonComponentProps> = (props) => {

    const handlePress = () => {
        if (props.onPress) {
          props.onPress(props.title);
        }
    };

    return (
        <View style={stylesToExport.buttonViewContainer}>
            <TouchableOpacity onPress={handlePress} style={[stylesToExport.buttonComponent, props.style]}>
                <Text style={stylesToExport.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonComponent;
