import { Text } from "react-native";
import React from "react";
import { StyledView, StyledImage, StyledText, StyledButton } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <StyledView>
      <StyledText>Invoice App</StyledText>
      <StyledImage source={require("@/assets/logoImg.jpeg")} alt="empty" />
      <StyledButton
        onPress={() => {
          //@ts-ignore
          navigation.navigate("CreateBill");
        }}
      >
        <Text style={{ color: "#fff" }}>Create Invoice</Text>
      </StyledButton>
    </StyledView>
  );
}
