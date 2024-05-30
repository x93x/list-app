import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import TitleText from "../components/TitleText";

function ListScreen({ route, navigation }) {
  const storg = route.params.storg;

  return (
    <ScrollView>
      <TitleText>YOUR LIST</TitleText>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Button>Add New One </Button>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={storg}
          renderItem={({ item }) => (
            <View style={styles.textContainer}>
              <Text style={{ color: "white" }}>* {item}</Text>
            </View>
          )}
          keyExtractor={(item) => item.index}
        />
      </View>
    </ScrollView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#5C0C40",
    borderWidth: 1,
    borderColor: "#B46097",
    borderRadius: 8,
    justifyContent: "center",
    elevation: 2,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 1,
    marginHorizontal: 100,
  },
  listContainer: {
    flix: 1,
    marginTop: 8,
  },
});
