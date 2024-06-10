import { useState } from "react";
import { Text, TextInput, View, ScrollView, Button, Alert } from "react-native";
import styles from "./style";
import dateFormat, { masks } from "dateformat";
import { Picker } from "@react-native-picker/picker";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { PdfCode } from "@/components/PdfCode";
import * as React from "react";

export default function CreateBill() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [quantity, setQuantity] = useState("");
  const now = new Date();
  const [invoice, setInvoice] = useState(dateFormat(now, "ddmmyyhhMss"));
  const [product, setProduct] = useState("मुरुम");
  const [total, setTotal] = useState("");
  const [receivedBalance, setReceivedBalance] = useState("");
  const [paymentType, setPaymentType] = useState("Credit");
  const [remainingBalance, setRemainingBalance] = useState("Paid");
  const [selectedPrinter, setSelectedPrinter] = React.useState<
    Print.Printer | undefined
  >();

  const print = async () => {
    await Print.printAsync({
      html: "",
      printerUrl: selectedPrinter?.url,
    });
  };

  const printToFile = async () => {
    let html = PdfCode(
      name,
      address,
      mobileNo,
      quantity,
      invoice,
      product,
      total,
      receivedBalance,
      paymentType,
      remainingBalance
    );
    try {
      const { uri } = await Print.printToFileAsync({
        html,
      });
      console.log("File has been saved to:", uri);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });

      setName("");
      setInvoice(dateFormat(now, "ddmmyyhhMss"));
      setTotal("");
      setQuantity("");
      setReceivedBalance("");
      setAddress("");
      setMobileNo("");
    } catch (err) {
      Alert.alert(
        "Make sure you have an Internet connection or contact @+91 8530730017"
      );
    }
  };
  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync();
    setSelectedPrinter(printer);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.InputContainer}>
          <Text>Name :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Full Name"
          />
        </View>

        <View style={styles.InputContainer}>
          <Text>Address : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setAddress(text)}
            value={address}
            placeholder="Address"
          />
        </View>

        <View style={styles.InputContainer}>
          <Text>Mobile No : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={(text) => setMobileNo(text)}
            value={mobileNo}
            placeholder="Mobile No"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Product : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={product}
              // style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}
            >
              <Picker.Item label="Murmur" value="Murmur" />
              <Picker.Item label="Khadi" value="Khadi" />
              <Picker.Item label="Walu" value="Walu" />
              <Picker.Item label="Soil" value="Soil" />
              <Picker.Item label="Grit" value="Grit" />
              <Picker.Item label="Stone" value="Stone" />
              <Picker.Item label="Crash Sand" value="Crash Sand" />
              <Picker.Item label="Plaster Sand" value="Plaster Sand" />
            </Picker>
          </View>
        </View>
        <View style={styles.InputContainer}>
          <Text>Quantity : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setQuantity(text)}
            value={quantity}
            placeholder="Quantity"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Invoice No : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setInvoice(text)}
            value={invoice}
            placeholder="Invoice No"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Total : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setTotal(text)}
            value={total}
            placeholder="Total ₹"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Received Amount : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setReceivedBalance(text)}
            value={receivedBalance}
            placeholder="Received Amount ₹"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Remaining Balance : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setRemainingBalance(text)}
            value={remainingBalance}
            placeholder="Remaining Balance ₹"
          />
        </View>
        <View style={styles.InputContainer}>
          <Text>Payment Method : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={paymentType}
              // style={styles.Picker}
              onValueChange={(itemValue, itemIndex) =>
                setPaymentType(itemValue)
              }
            >
              <Picker.Item label="Credit" value="Credit" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>
        <View style={styles.CreateInvoiceButton}>
          <Button title="Create Invoice" onPress={printToFile} />
        </View>
      </ScrollView>
    </View>
  );
}
