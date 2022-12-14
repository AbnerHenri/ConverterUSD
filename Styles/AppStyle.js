import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    Page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    CalculatorArea: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,

        width: '90%',
        height: '30%',
        transform: [{ translateY: -20 }],
    },

    Input: {
        width: 220,
        padding: 10,
        fontSize: 20,
        textAlign: 'center',

        borderBottomColor: '#fb1a09',
        borderBottomWidth: 2,

    },

    But: {
        width: 215,
        padding : 12,
        backgroundColor: '#fb1a09',

        justifyContent: 'center',
        alignItems: 'center',

        margin: 15,
        borderRadius: 35,
    },

    TextButton: {
        color: 'white',
        fontSize : 18
    },

    TitleOne: {
        fontSize: 26,
        fontWeight: 'bold',
        padding: 15
    },

    TitleTwo: {
        fontSize: 18,
        color: '#fe6d4c',
        marginBottom: 25,
    },

    Titles: {
        transform: [{ translateY: -35 }],
        justifyContent: 'center',
        alignItems: 'center'
    },

    Result: {
        width: '80%',
        height: 150,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'flex-end',

        padding : 15,
        borderBottomColor : 'gray',
        borderBottomWidth : 2,
    }

})

export default Styles;