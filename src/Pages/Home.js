import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <Text style={styles.text}>Loading ...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleDefaul}>
            Hi,you can calculate your body Mass index(BMI), Basal metabolic Rate
            (BMR) and total energy Expenditure (TDEE)
          </Text>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.ageContainer}>
            <View style={styles.resultBox}>
              <View style={styles.icons_container}>
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.textResultBmi}>27</Text>
                <Text style={styles.infoResult}>idade</Text>
              </View>
            </View>

            <View style={styles.resultBox}>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection:'row' }}>
              <Text style={styles.infoResult}>Homem</Text>
                <Switch
                  trackColor={{ false: "#615DEC", true: "#615DEC" }}
                  thumbColor={isEnabled ? "#767577" : "#767577"}
                  ios_backgroundColor="#767577"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text style={styles.infoResult}>Mulher</Text>
              </View>
            </View>
          </View>

          <View style={styles.ageContainer}>
            <View style={styles.resultBox}>
              <View style={styles.icons_container}>
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.textResultBmi}>60.5</Text>
                <Text style={styles.infoResult}>Peso</Text>
              </View>
            </View>

            <View style={styles.resultBox}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.textResultBmi}>177.5</Text>
                <Text style={styles.infoResult}>Altura</Text>
              </View>
              <View style={styles.icons_container}>
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={24}
                  color="#615DEC"
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.resultWrapper}>
          <View style={styles.result}>
            <Text style={styles.textTitle}>BMI</Text>
            <View style={styles.resultBoxBottom}>
              <Text style={styles.textResultBmi}>19.2</Text>
              <Text style={styles.infoResult}>you weight is normal</Text>
            </View>
          </View>

          <View style={styles.result}>
            <Text style={styles.textTitle}>BMR</Text>
            <View style={styles.resultBoxBottom}>
              <Text style={styles.textResultBmi}>1599</Text>
              <Text style={styles.infoResult}>colories per day</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
  },
  titleDefaul: {
    textAlign: "center",
    fontSize: 12,
  },
  text: {
    color: "#000",
    fontFamily: "BebasNeue_400Regular",
  },
  middleContainer: {
    width: "100%",
    // paddingHorizontal: 30,
  },
  icon: {
    marginBottom: 10,
  },
  resultBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 80,
  },
  resultBoxBottom: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  icons_container: {
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  ageContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginBottom: 30,
  },
  resultWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  result: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    color: "#000",
    fontFamily: "BebasNeue_400Regular",
  },
  textResultBmi: {
    fontFamily: "BebasNeue_400Regular",
    color: "#000",
    fontSize: 55,
  },
  infoResult: {
    fontSize: 11,
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#11161B",
    height: 40,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  textButton: {
    color: "#fff",
    letterSpacing: 5,
    textTransform: "uppercase",
    fontSize: 10,
  },
});

export default Home;
