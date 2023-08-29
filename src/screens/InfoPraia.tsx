import { Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import BeachService from "../services/beach";

interface InfoPraiaProps {
  beachId: string;
  onBack: () => void;
}

export default function InfoPraia({ beachId, onBack }: InfoPraiaProps) {
  const [beachData, setBeachData] = useState(null);

  useEffect(() => {
    BeachService.getBeachById(beachId) // Corrected the method call
      .then((response) => {
        setBeachData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beach data:", error);
      });
  }, [beachId]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={onBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text>{beachId}</Text>
      {beachData && <Text>Nome da Praia: </Text>}
    </View>
  );
}
