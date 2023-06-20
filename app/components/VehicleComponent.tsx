import React, { FC, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { IPageLayout, IVehicleDB } from '../models/interfaces';
import { stylesToExport } from '../styles/Styles';
import { LangContext } from '../context/LangContext';
import translations from '../utils/Languages';
import { getCategory } from '../utils/funcUtils';

/* Шаблон для ТС, чтобы и список сделать, и отдельно открыть */

const VehicleComponent: FC<IVehicleDB & IPageLayout> = (props) => {

  const {currLang} = useContext(LangContext);
  const localization = translations[currLang];

  /* Ниже идет выбор картинки ТС, соответствующей каждой категории(типу) */

  const getImage = (category: string) => {
    return (
      <View>
        {category == "truck" && <Image style={stylesToExport.image} source={require("../images/truck.png")}/>}
        {category == "passenger" && <Image style={stylesToExport.image} source={require("../images/passenger.png")}/>}
        {category == "special" && <Image style={stylesToExport.image} source={require("../images/special.png")}/>}
      </View>
    )
  }

  /* Тут пропс isList идет с HomeScreen. для того, чтобы при отображении на листе
    отображались одни данные, а в индивидуальном экране ТС другие */

  return (
    <View style={stylesToExport.view}>
      {getImage(props.category)}
      { props.isList 
        ? <View style={stylesToExport.details}>
            <Text style={stylesToExport.text}>{localization.vehicleComp.vNum + props.vehicleNumber}</Text>
            <Text style={stylesToExport.text}>{localization.vehicleComp.dName + props.fullName}</Text>
            <Text style={stylesToExport.text}>{localization.vehicleComp.vType + getCategory(currLang, props.category)}</Text>
          </View> 
        : <View style={stylesToExport.details}>
            <Text style={stylesToExport.text}>{localization.vehicleComp.vType + getCategory(currLang, props.category)}</Text>
            <Text style={stylesToExport.text}>{localization.vehicleComp.dName + props.fullName}</Text>
            <Text style={stylesToExport.text}>{localization.vehicleComp.dPhone + props.phone}</Text>
          </View> }
    </View>
  );
};

export default VehicleComponent;