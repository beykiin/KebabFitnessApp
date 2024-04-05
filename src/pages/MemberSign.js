import React, {useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";


function MemberSign({navigation}){

    const [name, setName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null); 
    const [country, setCountry] = React.useState(null);
    const [email, setEmail] = React.useState(null)

    function handleSubmit(){
        if(!name || !lastName || !country || !email){
            Alert.alert("Kebab Fitness","Cannot be left blank!");
            return;
        }
        const user = {
            name,
            lastName,
            country,
            email
        }
        navigation.navigate('Member Result Screen',{user})
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>KEBAB FİTNESS</Text>
            <View style={styles.innerContainer}>
                <Input placeholderTextColor="black" label="Name" placeholder="Enter your Name..." onChangeText={setName} />
                <Input placeholderTextColor="black" label="Last Name" placeholder="Enter your Last Name..." onChangeText={setLastName}/>
                <Input placeholderTextColor="black" label="Country" placeholder="Enter your Country..." onChangeText={setCountry}/>
                {/* <Input placeholderTextColor="black" label="Age" placeholder="Enter your Age..." /> */}
                <Input placeholderTextColor="black" label="E-Mail" placeholder="Enter your E-Mail..." onChangeText={setEmail}/>
                <Button style={styles.button} onPress={handleSubmit} text="Submit"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"skyblue",
        justifyContent:"center"
    },
    innerContainer:{
        backgroundColor:"aliceblue",
        margin:20,
        padding:10,
        borderRadius:10,
    },
    logo:{
        fontSize:30,
        fontWeight: "bold",
        textAlign: "center",
        color:"black",
        fontFamily: "palatino",
    }

})


export default MemberSign