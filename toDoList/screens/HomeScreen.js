import { View, StyleSheet, TextInput, Pressable } from "react-native";
import TitleText from "../components/TitleText";
import { useState } from "react";
import Button from "../components/Button";

function HomeScreen({ navigation }) {
  const [list, setList] = useState("");
  const [storg, setStorg] = useState([]);
 

  function addingNewDo(value) {
    setList(value);
    return;
  }

  function passData() {
    navigation.navigate("list", {
      storg: storg,
    });
  }

  function restValue() {
    setList("");
  }
  function storgNewList() {
    setStorg((newData) => [...newData, list]);
    setList("");
    return;
  }

  return (
    <View style={styles.container}>
      <TitleText>Adding Screen </TitleText>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter New Do "
          placeholderTextColor={"#F3EEEE"}
          onChangeText={addingNewDo}
          keyboardAppearance="dark"
          keyboardType="ascii-capable"
          value={list}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={storgNewList} style={styles.containerPressebale}>
            <Button>Add</Button>
          </Pressable>
          <Pressable onPress={restValue} style={styles.containerPressebale}>
            <Button>Cansel</Button>
          </Pressable>
        </View>
        <Pressable onPress={passData} style={styles.containerPressebale}>
          <Button>See Your List</Button>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPressebale: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "",
  },
  buttonContainer: {
    flix: 1,
    flexDirection: "row",
    margin: 8,
  },
  textContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#5C0C40",
    borderWidth: 1,
    borderColor: "#B46097",
    borderRadius: 8,
    justifyContent: "center",
    elevation: 2,
  },
  inputText: {
    padding: 10,
    borderColor: "white",
    marginHorizontal: 20,
    marginTop: 80,
    borderWidth: 1,
    borderRadius: 8,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default HomeScreen;
