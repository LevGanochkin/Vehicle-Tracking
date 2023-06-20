import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { VehicleScreen } from "./VehicleScreen";
import MapScreen from "./MapScreen";
import SettingsScreen from "./SettingsScreen";
import { FC, useContext } from "react";
import { LangContext } from "../context/LangContext";
import translations from "../utils/Languages";

/* Навигация из react-native-navigation. 
Идет проброс стилей для Header (не HeaderComponent!!! Речь о заголовке страницы с названием и кнопкой возврата).
Также пересылаем параметры локализации */

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
    
    const {currLang} = useContext(LangContext)
    const localization = translations[currLang]

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: localization.titles.home, headerStyle: {backgroundColor: "#4070a0"}, headerTintColor: "#fff", headerTitleAlign: "center"}}/>
                <Stack.Screen name="VehicleScreen" component={VehicleScreen} options={{title: localization.titles.vehicle, headerStyle: {backgroundColor: "#4070a0"}, headerTintColor: "#fff", headerTitleAlign: "center"}}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{title: localization.titles.map, headerStyle: {backgroundColor: "#4070a0"}, headerTintColor: "#fff", headerTitleAlign: "center"}}/>
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: localization.titles.settings, headerStyle: {backgroundColor: "#4070a0"}, headerTintColor: "#fff", headerTitleAlign: "center"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}