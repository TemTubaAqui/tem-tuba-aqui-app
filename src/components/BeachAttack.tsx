import { TouchableOpacityProps } from "react-native";
import { VStack, Pressable, Column, Row, Text } from "native-base";
import { useNavigation } from "@react-navigation/core";

type Props = TouchableOpacityProps & {
  name: string;
  attack_count: string;
  id_str: string;
};

export function BeachAttack({ name, attack_count, id_str, ...rest }: Props) {
  return (
      <VStack
        backgroundColor={"card"}
        borderRadius={15}
        shadow={"7"}
        p={4}
        mx={5}
        my={15}
        alignItems="center"
      >
        <Row>
            <Column w={"50%"}>
                <Text style={{color: "#00689d", fontWeight: '500', fontSize: 18, margin: 3, textAlign: 'left'}}>{name}</Text>
            </Column>
            <Column w={"50%"}>
                <Text style={{color: "#00689d", fontWeight: '500', fontSize: 18, margin: 3, textAlign: 'right'}}>{attack_count}</Text>
            </Column>
        </Row>
      </VStack>
  );
}
