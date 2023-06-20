import vehiclesDB from "../db/vehicleDB.json"
import { IVehicleDB } from "../models/interfaces";
import {Linking,Platform} from "react-native";

/* Тянет массив объектов с json. 
В tsconfig для этого прописаны "resolveJsonModule": true и "esModuleInterop": true*/

export const vehicles: IVehicleDB[] = vehiclesDB;

/* Фильтрация БД под конкретный тип ТС */

export const getFilteredData = (filter: string) => {

  const filteredData = filter ? vehicles.filter(item => item["category"] === filter.toLowerCase()) : vehicles;

  return filteredData;
}

/* Редирект в контакт лист для звонка водителю 
    Спасибо stackOverflow за то, что ты есть <3*/

export const openCall = (number: string) => {
      let phoneNumber = '';
      if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
      else {phoneNumber = `telprompt:${number}`; }
      Linking.openURL(phoneNumber);
  };

/* Редирект в WhatsApp с предварительным сообщением для отправки 
    Спасибо stackOverflow за то, что ты есть <3 (2) 
    !!!
    По не совсем понятной причине, при нажатии кнопик "назад", когда открыт whatsapp,
    закрывается не whatsapp, а приложение. Возможно, дело в во внутренних настройках whatsapp...
    Приложение контактов однако, закрывается само и возвращает на страницу ТС*/

export const openWhatsApp = (message: string, phone: string) => {
  const phoneNumber = phone.slice(1);
  Linking.openURL('whatsapp://send?text=' + message + '&phone=+7' + phone);
}

export const GOOGLE_API_KEY: string = "AIzaSyDuPE0wh36WFO9gH5onuBbEDL1vxCEXso4";

/* Координаты в json представлены строкой через запятую.
  тут они разделяются и возвращаются */

export const getCoordinates = (coordinates: string) => {
  return coordinates.split(",");
}

/* Возврат иконки для маркеров каждого типа ТС */

export const getImage = (category: string) => {

  if (category === "truck") return require("../images/lowtruck.png");
  else if (category === "special") return require("../images/lowspecial.png");
  else return require("../images/lowpassenger.png");
}

/* Локализирует отдельно категорию в VehicleComponent */

export const getCategory = (currLang: string, category: string) => {
  if(currLang === "ru") {
    return category === "truck" 
            ? "грузовой" 
            : category === "special" 
                      ? "спецтранспорт" 
                      : "пассажирский"
  } else return category;
}