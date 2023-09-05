import { TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import BeachService from "../services/beach";
import { Box, HStack, ScrollView, VStack, Text, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import praia from "../assets/praia.jpeg";
import { format } from "date-fns";
import { infoBeach } from "../types/interfaces";
import { useRoute } from "@react-navigation/native";

type paramsProps = {
  beachId: string;
}

export default function InfoPraia() {

  const route = useRoute();
  const {beachId} = route.params as paramsProps;
  const { navigate } = useNavigation<any>();
  const [beachData, setBeachData] = useState<infoBeach>({
    name: "",
    city: "",
    attack_count: "",
    last_attack: "",
    state: "",
  });

  useEffect(() => {
    BeachService.getBeachById(beachId)
      .then((response) => {
        setBeachData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beach data:", error);
      });
  }, [beachId]);

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
        mx={5}
        my={5}
        marginTop={5}
        flex={1}
      >
        <Image
          source={praia}
          alt="Praia"
          w={"100%"}
          height={"40%"}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        />

        {beachData && (
          <ScrollView>
            <VStack width="100%" alignItems={"center"}>
              <Text
                marginTop={8}
                fontSize={22}
                fontWeight={500}
                color={"#00689d"}
              >
                Informações da Praia
              </Text>
            </VStack>
            <VStack mx={5}>
              <Text
                fontWeight="bold"
                marginTop={5}
                fontSize={16}
                marginBottom={1}
              >
                Nome da Praia:
              </Text>
              <Text fontSize={16}>{beachData.name}</Text>
              <Text
                fontWeight="bold"
                marginTop={4}
                fontSize={16}
                marginBottom={1}
              >
                Cidade/Estado:
              </Text>
              <Text fontSize={16}>
                {beachData.city} / {beachData.state}
              </Text>
              <Text
                fontWeight="bold"
                marginTop={4}
                fontSize={16}
                marginBottom={1}
              >
                Quantidade de Ataques que está praia possui:
              </Text>
              <Text fontSize={16}>{beachData.attack_count} </Text>
              <Text
                fontWeight="bold"
                marginTop={4}
                fontSize={16}
                marginBottom={1}
              >
                Último Registro de Ataque:
              </Text>
              <Text fontSize={16}>
                {beachData.last_attack
                  ? format(new Date(beachData.last_attack), "dd/MM/yyyy")
                  : "N/A"}
              </Text>
            </VStack>
          </ScrollView>
        )}
      </VStack>
    </Box>
  );
}
