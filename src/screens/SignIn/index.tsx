import React, { useState } from "react";
import { View , Text, Image } from "react-native";
import { style } from "./style";
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() { 

    const [text, setText] = useState("Ezequiel")

    return (
        <View style = {style.container}>
            <Image source = {IllustrationImg} />
        </View>
    )
}