import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";

function MemberResult({route}){

    const {user} = route.params;


    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri:'https://img.freepik.com/premium-vector/fitness-gym-logo_7888-2.jpg'}}/>
            
            <Text style={styles.header}>
                KEBAB FİTNESS
            </Text>
            <View style={styles.innerContainer}>
                <Text style={styles.message}>Successful!</Text>
                <Text style={styles.text}>Name: {user.name}</Text>
                <Text style={styles.text}>Last Name: {user.lastName}</Text>
                <Text style={styles.text}>Country: {user.country}</Text>
                <Text style={styles.text}>E-Mail: {user.email}</Text>
                
            </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight: 'bold',
        margin:3,
        color:"black",
    },
    message:{
        fontWeight: 'bold',
        fontSize:30,
        textAlign: 'center',
        color:"greenyellow",
        marginBottom:20
    },
    container:{
        flex:1,
        backgroundColor:'skyblue',
        justifyContent:"center",
        alignItems:"center"
    },
    innerContainer:{
        backgroundColor:'aliceblue',
        margin:40,
        padding:20,
        borderRadius:20
        
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
    qr:{
        height:100,
        width:100,
        borderRadius:50,
        margin:20,
        borderWidth:3,
        borderColor:"black"
    },
})

export  default MemberResult; 