import React, { useContext, useState, FC } from 'react';
import { FlatList, StatusBar, View, TouchableOpacity } from 'react-native';
import VehicleComponent from '../components/VehicleComponent';
import { stylesToExport } from '../styles/Styles';
import HeaderComponent from '../components/HeaderComponent';
import { getFilteredData } from '../utils/funcUtils';
import ButtonComponent from '../components/ButtonComponent';
import { LangContext } from '../context/LangContext';
import translations from '../utils/Languages';

/* Домашняя страница. На ней список всех ТС,
    кнопки для перехода на глобальную карту, в настройки. Также при нажатии на ТС из списка идет
    редирект на страницу этого конкретного ТС 
    В заголовке Header от навигации, ниже расположен Header списка - HeaderComponent 
    с кнопками для фильтрации (чтобы убрать фильтр надо нажать на ту же кнопку повторно*/

const HomeScreen: FC = ({ navigation }: any) => {

    const {currLang} = useContext(LangContext);
    const localization = translations[currLang];

    const [filter, setFilter] = useState<string>("");
    
    const handleDataUpdate = (currFilter: string) => {
        setFilter(currFilter)
    }
    const filteredDb = getFilteredData(filter)
    return (
    <View style={stylesToExport.listView}>
        <FlatList 
            data={filteredDb}
            ListHeaderComponent={<HeaderComponent onDataUpdate={handleDataUpdate}/>}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            ListFooterComponent={
                <View style={stylesToExport.footerViewContainer}>
                    <ButtonComponent style={stylesToExport.buttonFooterComponent} title={localization.list.toMap} onPress={() => navigation.navigate("MapScreen", filteredDb)} />
                    <ButtonComponent style={stylesToExport.buttonFooterComponent} title={localization.list.settings} onPress={() => navigation.navigate("SettingsScreen", filteredDb)} />
                </View>
            }
            extraData={filter}
            keyExtractor={item => String(item.vehicleNumber)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("VehicleScreen", item)}>
                    <VehicleComponent 
                        vehicleNumber={item.vehicleNumber} 
                        fullName={item.fullName} 
                        category={item.category}
                        coordinates={item.coordinates}
                        phone={item.phone}
                        isList={true}
                    />
                </TouchableOpacity>
            )}
        />
        <StatusBar hidden={false}/>
    </View>
    );
}

export default HomeScreen;