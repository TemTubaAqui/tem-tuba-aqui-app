import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';


import { Beach } from '../components/Beach';
import { api } from '../Services/api';
interface BeachType {
  id: number,
  name: string
}

export default function Tta() {

  const [beachs, setBeachs] = useState<BeachType[]>([])
  const [searchBeach, setSearchBeach] = useState("");

  useEffect(() => {
    async function fetchBeachs() {
      try {
        const response = await api.get("/beaches", {
          params: {
            search: searchBeach
          },
        });
        setBeachs(response.data.results);


      } catch (error) {

      }
    }
    fetchBeachs();
  }, [searchBeach]);

  useEffect(() => {
    async function fetchRequest() {
      try {
        const response = await api.get("/beaches");
        setBeachs(response.data.results)


      } catch (error) {
        console.log(error)
        console.log("error")

      }
    }
    fetchRequest();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 9 }}>
      <Text style={{ marginTop: 25, color: "#00689d", fontWeight: '500', fontSize: 22, margin: 3, textAlign: 'center' }}>Tem tuba aqui?</Text>
      <View style={{
        flexDirection: 'row', gap: 12, paddingHorizontal: 23, paddingVertical: 8, borderRadius: 20,
        backgroundColor: "#EDEDED", marginTop: 33, marginBottom: 18
      }}>
        <Image source={require('../assets/Search.png')}
          alt='botão de emergência' style={{ width: 24, height: 24 }} />
        <TextInput placeholder='Qual praia que você deseja informação?' onChangeText={(text) => setSearchBeach(text)} placeholderTextColor={'#000'} />
      </View>

      <ScrollView >
        {beachs && beachs.map((beach) => (
          <Beach key={beach.id} name={beach.name} />
        ))}
      </ScrollView>
    </View>
  );
}