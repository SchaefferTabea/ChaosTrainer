import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InfoChildScreen from './InfoChildScreen';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ErsteHilfeScreen from './InfoUnterseiten/ErsteHilfeScreen';
import Logo from '../components/Header/Logo';

const Stack = createStackNavigator();

export default function InfoContainerScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="InfoChild" component={InfoChildScreen} />
            <Stack.Screen name="ErsteHilfe" component={ErsteHilfeScreen} />
        </Stack.Navigator>
    );
}

function InfoScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('ErsteHilfe')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Erste_Hilfe.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Erste Hilfe</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Feuer.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Brand</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Virus.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Virus</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Unfall.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Verkehrsunfall</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Überschwemmung.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Überschwemmung</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Image
                        source={require('../assets/InfoScreen/Waffe.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Terroranschlag</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    box: {
        width: 160,
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: 'center',
    },
    layout: {
        height: '28%',
        flexDirection: 'row',
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    icons: {
        width: 160,
        height: 160,
        flex: 5,
    },
    titel: {
        justifyContent: 'center',
        color: '#14647f',
        flex: 1,
        fontSize: 16,
        marginBottom: 15,
    
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitle: (props) => <Logo {...props} />,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    cardStyle: {
        backgroundColor: '#f79A42',
    },
};
