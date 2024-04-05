import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.styles";

const Button = ({text, onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default  Button;