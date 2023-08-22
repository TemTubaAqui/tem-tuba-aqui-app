import { Box, Text, Image, VStack, Pressable, ScrollView } from "native-base";
import logo1 from "../assets/Logo_TTA.png";
import duvida from "../assets/duvida.png";
import curiosidade from "../assets/curiosidade.png";
import { useNavigation } from '@react-navigation/core';

export default function Home() {
  const { navigate } = useNavigation<any>();
  return (
    <Box width="100%" flex={1}>
      <ScrollView>
        <Image
          source={logo1}
          alt="TemTubaAqui"
          size="56"
          m="auto"
          style={{ resizeMode: "contain" }}
        />

        <Pressable onPress={() => navigate("Tta")}> 
          <VStack
            borderColor="gray.200"
            borderWidth={3}
            borderRadius={8}
            p={4}
            mx={5}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" marginBottom={5} fontSize={16}>
              Tem tuba aqui?
            </Text>
            <Image source={duvida} alt="Dúvida" size="lg" m="auto" />
            <Text marginTop={5}>
              Pesquise uma praia pernambucana e visualize informações sobre
              ataques de tubarão nela.
            </Text>
          </VStack>
        </Pressable>
        <Pressable onPress={() => navigate("Curiosidades")}> 
          <VStack
            borderColor="gray.200"
            borderWidth={3}
            borderRadius={8}
            p={4}
            mx={5}
            my={5}
            marginTop={5}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" marginBottom={5} fontSize={16}>
              Curiosidades
            </Text>
            <Image source={curiosidade} alt="Curiosidades" size="lg" m="auto" />
            <Text marginTop={5}>
              Encontre cartilhas com informações importantes sobre ataques de
              tubarão.
            </Text>
          </VStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
