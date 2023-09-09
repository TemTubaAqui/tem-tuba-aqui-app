import { Box, Text, Column, Row, ScrollView } from "native-base";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { BeachAttack } from "../components/BeachAttack";
import { askForLocationPermission, findNearestPoints, getCoords } from "../services/geolocation";
import { jsonParser } from "../services/jsonParser";
import { ActivityIndicator } from "react-native";

interface BeachType {
    id: number;
    attack_count: number;
    name: string;
    id_str: string;
}

export default function PraiasProximas() {
    askForLocationPermission();
    const [loading, setLoading] = useState(true);
    const [beachs, setBeachs] = useState<BeachType[]>([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const location = await getCoords();
          if (location) {
            const { latitude, longitude } = location.coords;
            const nearestBeachs = findNearestPoints(latitude, longitude, jsonParser());

            const beachData: BeachType[] = [];
            for (const beach of nearestBeachs) {
              console.log(beach.nome);
              const response = await api.get("/beaches", {
                params: {
                  search: beach.nome,
                },
              });
              beachData.push(response.data.results[0]);
              await new Promise((resolve) => setTimeout(resolve, 100)); 
            }

            beachData.sort(function(a, b) {
              return a.attack_count - b.attack_count;
            });
            
            setBeachs(beachData.slice(0, 5));
            setLoading(false)
          } else {
            console.error("Localização não disponível.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados das praias:", error);
        }
      }
    
      fetchData();
    }, []);

    return (
        <Box w="100%" flex={1} bg={"background"}>
            <Text style={{marginTop: 25, color: "#00689d", fontWeight: '500', fontSize: 22, margin: 3, textAlign: 'center'}}>Praias próximas e seguras perto de você</Text>
            <Row>
                <Column w={"50%"}>
                    <Text style={{marginTop: 25, marginStart: 35, color: "#00689d", fontWeight: '500', fontSize: 18, margin: 3, textAlign: 'left'}}>Praia</Text>
                </Column>
                <Column w={"50%"}>
                    <Text style={{marginTop: 25, marginEnd: 35, color: "#00689d", fontWeight: '500', fontSize: 18, margin: 3, textAlign: 'right'}}>Nº de ataques</Text>
                </Column>
            </Row>
            <ScrollView>
                {loading ? (
                  <ActivityIndicator size="large" color="#007BFF" />
                ) : (
                  beachs &&
                  beachs.map((beach) => {
                      return <BeachAttack key={beach.name} attack_count={beach.attack_count} name={beach.name} id_str={beach.id.toString()} />;
                  })
                )}
            </ScrollView>
        </Box>
    )
}