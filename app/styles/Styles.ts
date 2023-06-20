import { StyleSheet } from "react-native";

/* Набор стилей */

export const stylesToExport = StyleSheet.create({
    
    view: {
        flexDirection: "row",
        padding: 10,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 3,
        borderBottomStyle: "solid",
    },
    listView: {
        backgroundColor: "#cce6ff",
        height: "100%",
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 12,
        marginRight: 12,
    },
    buttonImage: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 12,
    },
    text: {
        color: "#000",
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "" 
    },
    details: {
        justifyContent: "center",
        
    },
    fixToText: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    map: {
        width: "100%",
        height: "71%",
    },
    mapScreen: {
        width: "100%",
        height: "100%",
    },
    settingsScreen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#cce6ff',
        paddingVertical: 270,
    },
    headerViewContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cce6ff',
    },
    footerViewContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#cce6ff',
    },
    buttonComponent: {
        width: 120,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4070a0',
        opacity: 0.9,
    },
    buttonFooterComponent: {
        width: 160,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4070a0',
        opacity: 0.9,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonViewContainer: {
        margin: 5,
        alignItems: 'center',
    },
    buttonImageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: '#cce6ff',
    },
    description: {
        justifyContent: "center",
        width: 130,
    }
  });