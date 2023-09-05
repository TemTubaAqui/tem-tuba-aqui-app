import { Box, Text, Image, VStack, Link, ScrollView, HStack, Pressable, Icon } from "native-base";
import evitarAtaque from "../assets/evitar-sobreviver-ataque.png";
import tubaraoTouro from "../assets/tubarao-touro.jpg";
import vitimaAtaque from "../assets/vitima-ataque.jpg";
import ataquesRecife from "../assets/ataques-recife.jpg";

export default function Curiosidades() {
    return (
      <Box width="100%" flex={1} bg={"background"}>
        <Text style={{marginTop: 25, color: "#00689d", fontWeight: '500', fontSize: 22, margin: 3, textAlign: 'center'}}>Curiosidades</Text>
        <ScrollView>
        <Link m="auto" href="https://drive.google.com/file/d/1TF3ksMDTEv1sxzz7sgiC53bGrllMpW2F/view?usp=drivesdk">
          <VStack
            backgroundColor={"card"}
            borderRadius={15}
            shadow={"7"}
            p={4}
            mx={5}
            my={15}
            alignItems="center"
          >
            <Text bold marginBottom={5} fontSize={16} textAlign={"center"}>
              Como evitar e sobreviver a um ataque de tubarão?​
            </Text>
            <Image source={evitarAtaque} alt="ilustração de tubarão" size={160} borderRadius={10} m="auto" />
            <Text marginX={25} marginTop={5} textAlign={"center"}>
              É importante saber como evitar um acidente com ataque de tubarão.
            </Text>
            <Text fontSize={20} underline bold marginTop={1} color={"primary"}>
              Cartilha
            </Text>
          </VStack>
        </Link>
        <Link m="auto" href="https://drive.google.com/file/d/16hKvrlSjcidcQbTrM8kt80BNwMDhSYa2/view?usp=drivesdk">
          <VStack
            backgroundColor={"card"}
            borderRadius={15}
            shadow={"7"}
            p={4}
            mx={5}
            my={15}
            alignItems="center"
          >
            <Text bold marginBottom={5} fontSize={16} textAlign={"center"}>
              Quais tubarões atacam em Pernambuco?
            </Text>
            <Image source={tubaraoTouro} alt="Imagem de um tubarão touro" size={150} borderRadius={10} m="auto" />
            <Text marginX={25} marginTop={5} textAlign={"center"}>
              Conheça as principais espécies de tubarões que atacam no litoral Pernambucano.
            </Text>
            <Text fontSize={20} underline bold marginTop={1} color={"primary"}>
              Cartilha
            </Text>
          </VStack>
        </Link>
        <Link m="auto" href="https://drive.google.com/file/d/1DVTYebD_SyE_F_wZ6R50cOFSh7dc9SW8/view?usp=drivesdk"> 
          <VStack
            backgroundColor={"card"}
            borderRadius={15}
            shadow={"7"}
            p={4}
            mx={5}
            my={15}
            alignItems="center"
          >
            <Text bold marginBottom={5} fontSize={16} textAlign={"center"}>
              Por que Recife tem tantos acidentes com tubarão?
            </Text>
            <Image source={ataquesRecife} alt="Praia de Boa Viagem" size={150} borderRadius={10} m="auto" />
            <Text marginX={25} marginTop={5} textAlign={"center"}>
              Veja porque ocorrem tantos ataques de tubarão no litoral pernambucano e quais os pontos mais perigosos.
            </Text>
            <Text fontSize={20} underline bold marginTop={1} color={"primary"}>
              Cartilha
            </Text>
          </VStack>
        </Link>
        <Link m="auto" href="https://drive.google.com/file/d/1nUo13Flmyg0bcPxcoEkVSLU8p0hOtJdy/view?usp=drivesdk"> 
          <VStack
            backgroundColor={"card"}
            borderRadius={15}
            shadow={"7"}
            p={4}
            mx={5}
            my={15}
            alignItems="center"
          >
            <Text bold marginBottom={5} fontSize={16} textAlign={"center"}>
              O Que Fazer Com Uma Vítima De Ataque?
            </Text>
            <Image source={vitimaAtaque} alt="Homem de frente a tubarão" size={150} borderRadius={10} m="auto" />
            <Text marginX={25} marginTop={5} textAlign={"center"}>
              Caso você tenha sido atacado ou se deparar com uma vítima de ataque, é importante que saiba como agir nessa situação.
            </Text>
            <Text fontSize={20} underline bold marginTop={1} color={"primary"}>
              Cartilha
            </Text>
          </VStack>
        </Link>
        </ScrollView>
      </Box>
    );
  }