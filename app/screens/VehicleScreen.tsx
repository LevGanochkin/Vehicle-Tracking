import React, { FC, useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { stylesToExport } from '../styles/Styles';
import VehicleComponent from '../components/VehicleComponent';
import { openCall, openWhatsApp, getImage } from '../utils/funcUtils';
import MapView, { Marker } from 'react-native-maps';
import { LangContext } from '../context/LangContext';
import translations from '../utils/Languages';

export const VehicleScreen: FC = ({ route }: any) => {

  /* Экран ТС с картой и координатами этого ТС, данными и кнопками редиректа
    на телефонную книгу и whatsapp. Кстати, предзаготовленное сообщение тоже
    меняет язык при смене языка в настройках */

  const {currLang} = useContext(LangContext);
  const localization = translations[currLang];
  
  const currVehicle = route.params;
  const messageTemplate = localization.vehicleScr.msgTempl;

  return (
    <View style={stylesToExport.listView}>
      <MapView
        initialRegion={{
            latitude: currVehicle.coordinates.latitude,
            longitude: currVehicle.coordinates.longitude,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
          }}
        style={stylesToExport.map}
      >
        <Marker
          key={currVehicle.vehicleNumber}
          coordinate={currVehicle.coordinates}
          title={currVehicle.fullName}
          image={getImage(currVehicle.category)}
          />
      </MapView>
      <VehicleComponent
        vehicleNumber={currVehicle.vehicleNumber} 
        category={currVehicle.category}
        fullName={currVehicle.fullName} 
        coordinates={currVehicle.coordinates}
        phone={currVehicle.phone}
        isList={false}
      />
      <View style={stylesToExport.fixToText}>
        <View style={stylesToExport.description}>
          <Text style={stylesToExport.text}>{localization.vehicleScr.connect}</Text>
        </View>
        <View style={stylesToExport.buttonImageContainer}>
          <View style={stylesToExport.buttonViewContainer}>
              <TouchableOpacity onPress={() => openCall(currVehicle.phone)} >
                  <Image style={stylesToExport.buttonImage} source={require("../images/phone.png")}/>
              </TouchableOpacity>
          </View>
          <View style={stylesToExport.buttonViewContainer}>
              <TouchableOpacity onPress={() => openWhatsApp(messageTemplate, currVehicle.phone)}>
                  <Image style={stylesToExport.buttonImage} source={require("../images/whatsapp.png")}/>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};