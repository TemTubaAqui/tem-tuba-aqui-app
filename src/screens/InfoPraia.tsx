import { Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import BeachService from "../services/beach";

const mockData = {
  id: 33,
  attack_count: 4,
  last_attack: "2015-03-31",
  city: "Olinda",
  state: "PE",
  country: "BR",
  name: "Del Chifre",
  latitude: 0.0,
  longitude: 0.0,
};

export default function InfoPraia( ) {
  const [beachData, setBeachData] = useState(null);

  // useEffect(() => {
  //   BeachService.getBeachById(beachId) 
  //     .then((response) => {
  //       setBeachData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching beach data:", error);
  //     });
  // }, [beachId]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity >
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text>{}</Text>
      {beachData && <Text>Nome da Praia: </Text>}
    </View>
  );
}
