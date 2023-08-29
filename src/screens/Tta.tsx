import { TouchableOpacity, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { CardBeaches } from "../components/CardBeaches";
import InfoPraia from "../screens/InfoPraia";

export default function Tta() {
  const { navigate } = useNavigation<any>();
  const [beach, setBeach] = useState(false);

  const handleBackToBeach = () => {
    setBeach(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      {
        !beach ? 
          <TouchableOpacity onPress={() => setBeach(!beach)}>
            <CardBeaches></CardBeaches>
          </TouchableOpacity>
          :
          <InfoPraia beachId="33" onBack={handleBackToBeach}/>
      }
      </View>
  );
}
