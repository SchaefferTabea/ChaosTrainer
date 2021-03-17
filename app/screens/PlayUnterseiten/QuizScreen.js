//Librarys
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, StyleSheet, View, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

//Components
import ErsteFrageScreen from "./ErsteFrageScreen";
import Logo from "../../components/Header/Logo";

//Styles
import mainStyle from "../../components/Styles/MainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";

const Stack = createStackNavigator();

export default function QuizScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Quiz" component={QuizHomeScreen} />
            <Stack.Screen name="ErsteFrage" component={ErsteFrageScreen} />
        </Stack.Navigator>
    );
}
function QuizHomeScreen({navigation}) {
    return (
        <View style={mainStyle.container}>
            <Text style={quizStyle.whiteFontWithShadow}>Quiz</Text>
            <View style={quizStyle.layout}>
                <View style={[mainStyle.box, quizStyle.boxSize]}>
                    <View style={{flex: 4}}>
                        <Text style={[mainStyle.titel, {flex: 0}]}>
                            Gefahren-Quiz
                        </Text>
                        <Text style={mainStyle.h1}>
                            Teste dein Wissen über gefahren
                        </Text>
                    </View>
                    <View style={{flex: 4, flexDirection: "row"}}>
                        <Image
                            source={require("../../assets/QuizScreen/Feuer.png")}
                            style={quizStyle.feuerImage}
                        />
                        <View>
                            <Text style={quizStyle.hindText}>
                                Erfahere mehr über
                            </Text>
                            <Text style={quizStyle.hindText}>
                                Brände in der Bibliothek
                            </Text>
                        </View>
                    </View>
                    <View style={mainStyle.orangeBottomInBox}>
                        <Text style={quizStyle.hiScoreText}>
                            Dein erreicheter Hi-Score:
                        </Text>
                        <Text style={quizStyle.hiScore}>2100 Punkte</Text>
                    </View>
                    <View style={{elevation: 20, zIndex: 40}}>
                        <Image
                            source={require("../../assets/QuizScreen/QuizPerson.png")}
                            style={quizStyle.QuizPersonImage}
                        />
                    </View>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        style={[mainStyle.box, quizStyle.startButton]}
                        onPress={() => navigation.navigate("ErsteFrage")}
                    >
                        <Text style={quizStyle.startText}>Jetzt Starten</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[mainStyle.box, quizStyle.settingButton]}
                    >
                        <Image
                            source={require("../../assets/QuizScreen/Einstellungen.png")}
                            style={quizStyle.settingImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const headerStyle = {
    headerStyle: {
        backgroundColor: "#f79A42",
        elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitle: (props) => <Logo {...props} />,
    headerTitleStyle: {
        fontWeight: "bold",
    },
    cardStyle: {
        backgroundColor: "#f79A42",
    },
};
