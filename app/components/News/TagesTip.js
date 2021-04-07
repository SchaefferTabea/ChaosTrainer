//Librarys
import React, { useEffect } from "react";
import {Text, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";


//Styles
import homeStyle from "../Styles/homeStyleSheet.js";

const data = require("../../assets/Content/TagesTip.json");
const random = Math.floor(Math.random()*31)+0;
//console.log(random);



export default function TagesTip({navigation}){
    return (
        <TouchableOpacity
        style={[homeStyle.tippDesTagesBox, homeStyle.boxSize]}
        onPress={() => navigation.navigate("Asthma")}
        >
            <Text style={homeStyle.tippDesTagesTitel}>Tipp des Tages</Text>
            <Text style={homeStyle.tippDesTagesText}>
                {data.TagesTip[random].Text} 
            </Text>
            <Image
                source={require("../../assets/HomeScreen/Tipp.png")}
                style={homeStyle.tippDesTagesImage}
            />
        </TouchableOpacity>
    );

}