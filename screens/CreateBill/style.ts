import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 4,
  },
  InputContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  textInput: {
    // width:100,
    marginTop: 4,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginBottom: 6,
  },
  PickerContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
  },
  CreateInvoiceButton: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  spacer: {
    height: 8,
  },
  printer: {
    textAlign: "center",
  },
});

export default styles;
