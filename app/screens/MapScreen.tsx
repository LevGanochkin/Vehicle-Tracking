import React, { FC } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { stylesToExport } from '../styles/Styles';
import { IVehicleDB } from '../models/interfaces';
import { getImage } from '../utils/funcUtils';

/* Карта на которой отображены все доступные ТС*/

const MapScreen: FC = ({ route }: any) => {

    const vehicleArray = route.params;

    const showMarkers = () => {
        return vehicleArray.map((vehicle: IVehicleDB) => {
            return (
                <Marker
                    key={vehicle.vehicleNumber}
                    coordinate={vehicle.coordinates}
                    title={vehicle.fullName}
                    image={getImage(vehicle.category)}
                />
            );
        });
    }

  return (
    <View>
        <MapView
            style={stylesToExport.mapScreen}
            initialRegion={{
                latitude: vehicleArray[0].coordinates.latitude,
                longitude: vehicleArray[0].coordinates.longitude,
                latitudeDelta: 0.12,
                longitudeDelta: 0.12,
            }}
        >
            {showMarkers()}
        </MapView>
    </View>

  );
};

export default MapScreen;

