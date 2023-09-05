import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { VStack, Pressable, Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/core";

type Props = TouchableOpacityProps & {
  name: string;
  id_str: string;
};

export function Beach({ name, id_str, ...rest }: Props) {
  const { navigate } = useNavigation<any>();
  return (
    <Pressable onPress={() => navigate("InfoPraia", { beachId: id_str })}>
      <VStack
        backgroundColor={"card"}
        borderRadius={15}
        shadow={"7"}
        p={4}
        mx={5}
        my={15}
        alignItems="center"
      >
        <Image
          source={require("../assets/Beachicon.png")}
          alt="Dúvida"
          m="auto"
        />
        <Text fontWeight="bold" fontSize={16}>
          {name}
        </Text>
      </VStack>
    </Pressable>
  );
}
