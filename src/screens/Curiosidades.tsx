
import { View } from 'react-native';
import { Text, Image, VStack, Link, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/core';
import evitarAtaque from "../assets/evitar-sobreviver-ataque.png";
import tubaraoTouro from "../assets/tubarao-touro.jpg";
import vitimaAtaque from "../assets/vitima-ataque.jpg";
import ataquesRecife from "../assets/ataques-recife.jpg";

export default function Curiosidades() {
  const { navigate } = useNavigation<any>();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: "#00689d", fontWeight: '500', fontSize: 22, margin: 3, textAlign: 'center'}}>Curiosidades</Text>
        <ScrollView>
        <Link href="https://drive.google.com/file/d/1AVNNpJgXqkg4IGjtg3DuwKHHRSG0qj-V/view?usp=sharing">
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
                Como evitar e sobreviver a um ataque de tubarão?​
              </Text>
              <Image source={evitarAtaque} alt="ilustração de tubarão" size={160} borderRadius={10} m="auto" />
              <Text marginTop={5}>
               É importante saber como evitar um acidente com ataque de tubarão.
              </Text>
            </VStack>
          </Link>
          <Link href="https://drive.google.com/file/d/1ANm8Wq5zTNPVVhw3G649DxeLlV3cEXyq/view?usp=sharing"> 
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
                Quais tubarões atacam em Pernambuco?
              </Text>
              <Image source={tubaraoTouro} alt="Imagem de um tubarão touro" size={150} borderRadius={10} />
              <Text marginTop={5}>
               Conheça as principais espécies de tubarões que atacam no litoral Pernambucano e saiba suas principais características.
              </Text>
            </VStack>
          </Link>
          <Link href="https://drive.google.com/file/d/1ARMztEZsAXSyYjrPTdPdMpN6p1vgqgJ7/view?usp=sharing"> 
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
                Por que Recife tem tantos acidentes com tubarão?
              </Text>
              <Image source={ataquesRecife} alt="Praia de Boa Viagem" size={150} borderRadius={10} m="auto" />
              <Text marginTop={5}>
                Veja porque ocorrem tantos ataques de tubarão no litoral pernambucano e quais os pontos mais perigosos.
              </Text>
            </VStack>
          </Link>
          <Link href="https://drive.google.com/file/d/1AT5Z5qzbI89C7oke5BsCnIOrpIND6PA8/view?usp=sharing"> 
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
                O Que Fazer Com Uma Vítima De Ataque?​
              </Text>
              <Image source={vitimaAtaque} alt="Homem de frente a tubarão" size={150} borderRadius={10} m="auto" />
              <Text marginTop={5}>
                Caso você tenha sido atacado ou se deparar com uma vítima de ataque, é importante que saiba como agir nessa situação.
              </Text>
            </VStack>
          </Link>
        </ScrollView>
      </View>
    );
  }