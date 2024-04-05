import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./Input.styles"

function Input ({label, onChangeText, placeholder, placeholderTextColor}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText}/>
            </View>
        </View>
    )
}


export default Input
