
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { VStack, Pressable, Image, Text } from "native-base";
import { useNavigation } from '@react-navigation/core';


type Props = TouchableOpacityProps & {
  name: String;
};

export function Beach({ name, ...rest }: Props) {
  const { navigate } = useNavigation<any>();

  return (
    <Pressable onPress={() => navigate("Curiosidades")}>
      <VStack
        borderColor="gray.200"
        borderWidth={3}
        borderRadius={8}
        p={4}
        mx={5}
        justifyContent="center"
        alignItems="center"
        marginBottom={15}
      >

        <Image source={require('../assets/Beachicon.png')} alt="Dúvida" m="auto" />
        <Text fontWeight="bold" fontSize={16}>
          {name}
        </Text>
      </VStack>
    </Pressable>

  );

}