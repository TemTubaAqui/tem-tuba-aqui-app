import { Text, View, Image, TextInput, ScrollView } from 'react-native';

import { Beach } from '../components/Beach';

export default function Tta() {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 9 }}>
      <Text>Tem tuba aqui?</Text>
      <View style={{
        flexDirection: 'row', gap: 12, paddingHorizontal: 23, paddingVertical: 8, borderRadius: 20,
        backgroundColor: "#EDEDED", marginTop: 33, marginBottom: 18
      }}>
        <Image source={require('../assets/Search.png')}
          alt='botão que possue uma imagem de um telefone e SOS' style={{ width: 24, height: 24 }} />
        <TextInput placeholder='Qual praia que você deseja informação?' placeholderTextColor={'#000'} />
      </View>

      <ScrollView >
        <Beach name={'Porto de galinhas'} />

      </ScrollView>
    </View>
  );
}