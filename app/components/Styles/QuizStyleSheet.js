//Librarys
import { StyleSheet } from "react-native";

//Constants
import Colors from "../../constants/colors.js";
import {Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  boxSize: {
    width: windowWidth*0.9,
    height: windowHeight*0.4,
  },
  layout: {
    height: "80%",
    flexDirection: "column",
    margin: 10,
  },

  //Text
  ShadowText: {
    color: Colors.white,
    fontSize: 70,
    fontWeight: "bold",
    marginLeft: 40,
    alignSelf: "flex-start",
    position: "absolute",
    top: -5,
    zIndex: 40,
    textShadowOffset: { width: 0, height: 0 },
    textShadowColor: "#CCC",
    textShadowRadius: 15,
    shadowOpacity: 0.5,
    elevation: 1,
  },

  hindText: {
    marginTop: 0,
    fontSize: 20,
    textAlignVertical: "center",
    marginLeft: 20,
    color: Colors.lightOrange,
  },

  hiScoreText: {
    color: Colors.white,
    fontSize: 15,
    textAlignVertical: "center",
    marginLeft: 80,
    marginTop: 5,
  },

  hiScore: {
    color: Colors.white,
    fontSize: 40,
    textAlignVertical: "center",
    marginLeft: 80,
    fontWeight: "bold",
  },
  startText: {
    color: Colors.white,
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "center",
  },

  //Buttons
  startButton: {
    backgroundColor: Colors.orange,
    width: 230,
    height: 80,
    marginTop: 70,
    overflow: "visible",
  },
  settingButton: {
    backgroundColor: Colors.orange,
    width: 80,
    height: 80,
    marginTop: 70,
  },

  //Images
  settingImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  feuerImage: {
    width: 50,
    height: 70,
    alignSelf: "center",
    marginBottom: 70,
    marginLeft: 10,
  },
  QuizPersonImage: {
    width: 110,
    height: 150,
    position: "absolute",
    top: -69,
    left: -15,
    zIndex: 40,
  },
});
