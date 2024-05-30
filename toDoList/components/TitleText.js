import { Text, View, StyleSheet, Platform } from "react-native";

function TitleText({ children }) {
  return (
    <View style={styles.shadow}>
      <View style={styles.titleInnerContainer}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </View>
  );
}

export default TitleText;

const styles = StyleSheet.create({
  titleInnerContainer: {
    marginHorizontal: 30,
    marginVertical: 30,
    marginBottom: 4,
    padding: 10,
    backgroundColor: "#2C1523D7",
    borderWidth: 1,
    borderColor: "#F5EAEA9F",
    borderRadius: 8,
    justifyContent: "center",
    elevation: 2,
  },
  shadow: {
    opacity: 0.85,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
