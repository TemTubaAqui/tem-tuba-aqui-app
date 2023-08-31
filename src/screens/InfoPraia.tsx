import { TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import BeachService from "../services/beach";
import { Box, HStack, ScrollView, VStack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import praia from "../assets/praia.jpeg";
import { format } from "date-fns";


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

// checar se é null
if (mockData.last_attack) {
  // formatação da data
  mockData.last_attack = format(new Date(mockData.last_attack), "dd/MM/yyyy");
} else {
  mockData.last_attack = "N/A"; // valor padrão
}

export default function InfoPraia() {
  const { navigate } = useNavigation<any>();
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
    <Box w="100%" flex={1} bg={"background"}>
        <HStack
          w="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          px={4}
          marginTop={5}
        >
          <TouchableOpacity onPress={() => navigate("Tta")}>
            <AntDesign name="leftcircle" size={30} color="#00689D" />
          </TouchableOpacity>
        </HStack>

        <VStack
          backgroundColor={"card"}
          borderRadius={15}
          shadow={"7"}
          //p={4}
          mx={5}
          my={5}
          marginTop={5}
        >
          <Image
            source={praia}
            alt="Curiosidades"
            style={{
              width: "100%",
              height: "40%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
          <Box width="100%" alignItems={"center"}>
            <Text
              marginTop={8}
              fontSize={22}
              fontWeight={500}
              color={"#00689d"}
            >
              Informações da Praia
            </Text>
          </Box>
          <Box mx={5}>
            <Text
              fontWeight="bold"
              marginTop={5}
              fontSize={16}
              marginBottom={1}
            >
              Nome da Praia:
            </Text>
            <Text fontSize={16}>{mockData.name}</Text>
            <Text
              fontWeight="bold"
              marginTop={4}
              fontSize={16}
              marginBottom={1}
            >
              Cidade/Estado:
            </Text>
            <Text fontSize={16}>
              {mockData.city}/ {mockData.state}{" "}
            </Text>
            <Text
              fontWeight="bold"
              marginTop={4}
              fontSize={16}
              marginBottom={1}
            >
              Quantidade de Ataques que está praia possui:
            </Text>
            <Text fontSize={16}>{mockData.attack_count} </Text>
            <Text
              fontWeight="bold"
              marginTop={4}
              fontSize={16}
              marginBottom={1}
            >
              Último Registro de Ataque:
            </Text>
            <Text fontSize={16}>{mockData.last_attack} </Text>
          </Box>
        </VStack>
    </Box>
  );
}
