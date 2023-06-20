import { LatLng } from "react-native-maps"
import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native/types"

/* Набор интерфейсов для FC, бд и пропсов */

export interface IVehicleDB {
    vehicleNumber: number
    fullName: string
    category: string
    coordinates: LatLng
    phone: string
}

export interface IPageLayout {
    isList: boolean
}

export interface IVehicleProps {
    vehicle: IVehicleDB
}

export interface IButtonComponentProps {
    style?: StyleProp<ViewStyle>
    title: string
    onPress: (e: string) => void
}

export interface IButtonImageProps {
    style?: StyleProp<ImageStyle>
    source: ImageSourcePropType
    onPress: (e: string) => void
}

export interface IHeader {
    onDataUpdate: (e: string) => void
}