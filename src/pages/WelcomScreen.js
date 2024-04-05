import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button"

function WelcomeScreen ({navigation}) {

    function goToMemberSign(){
        navigation.navigate("Member Sign Screen")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri:'https://img.freepik.com/premium-vector/fitness-gym-logo_7888-2.jpg'}}/>
            
            <Text style={styles.header}>
                KEBAB FİTNESS
            </Text>
            <Text style={styles.text}>
                Do you not have an account? Create a now!
            </Text>
            <Button text="Create Acount!" onPress={goToMemberSign}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',  
        alignItems:'center',
        backgroundColor:"skyblue",
        
    },
    header:{
        fontSize:30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:50,
        color:"black",
        fontFamily: "palatino",
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
        margin:20,
        borderWidth:3,
        borderColor:"black"
    },
    text:{
        color:"black",
        fontWeight: "bold",
        fontSize:16,
        marginBottom:20
    }
})

export default WelcomeScreen 
