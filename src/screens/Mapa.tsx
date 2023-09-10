import { Box, Text, Image, VStack, Button } from "native-base";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { jsonParser } from "../services/jsonParser";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { askForLocationPermission, getCoords } from "../services/geolocation";
import Modal from 'react-native-modal';

interface BeachDetail {
    name: string,
    latitude: number,
    longitude: number,
    state: string,
    city: string,
    last_attack: string,
    attack_count: number
}

export default function PraiasProximas() {
    const [loading, setLoading] = useState(false);
    const [myLat, setMyLat] = useState<number | 0>(0);
    const [myLon, setMyLon] = useState<number | 0>(0);
    const [beaches, setBeaches] = useState(jsonParser());
    const [beachDetail, setBeachDetail] = useState<BeachDetail | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!isModalVisible);

    async function loadBeachDetail (name: string, lat: number, lng: number) {
        const response = await api.get("/beaches", {
            params: {
                search: name,
            },
        });
        let beachResponse: BeachDetail = response.data.results[0];
        beachResponse.latitude = parseFloat(lat.toFixed(4));
        beachResponse.longitude = parseFloat(lng.toFixed(4));
        setBeachDetail(response.data.results[0]);
    }

    useEffect(() => {
        async function setMyLocation() {
            await askForLocationPermission();
            try {
                const location = await getCoords();
                if (location) {
                    const { latitude, longitude } = location.coords;
                    setMyLat(latitude)
                    setMyLon(longitude)
                }
            } catch(error) {
                console.error("Erro ao buscar dados das praias:", error);
            }
        }

        async function executeFunctions() {
            await setMyLocation();
        }

        executeFunctions();

      }, []);
      
    return (
        <Box w="100%" flex={1} bg={"background"}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -8.05,
                    longitude: -34.88,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: myLat,
                        longitude: myLon,
                    }}
                    title="Sua Localização"
                    description={`Lat: ${myLat} | Lng: ${myLon}`}
                />
                {beaches.map((local, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: local.latitude,
                            longitude: local.longitude,
                        }}onPress={async () => {
                            setLoading(true)
                            await loadBeachDetail(local.nome, local.latitude, local.longitude)
                            toggleModal()
                            setLoading(false)
                        }}
                    />
                ))}
            </MapView>
            {loading ? (
                  <ActivityIndicator size="large" color="#007BFF" />
            ) : (
                <Modal isVisible={isModalVisible}>
                    <VStack
                        backgroundColor={"card"}
                        borderRadius={15}
                        shadow={"7"}
                        p={4}
                        mx={5}
                        my={15}
                        alignItems="center"
                    >
                        <Image source={require('../assets/beach-circle.png')} size="70" alt='ícone da Home'/>
                        <Text style={{marginTop: 10, marginBottom: 25, color: "#00689d", fontWeight: '500', fontSize: 22, margin: 3, textAlign: 'center'}}>{beachDetail?.name}</Text>
                        
                        <Text fontSize={11}>
                            <Text bold>Latitude: </Text> {beachDetail?.latitude}
                        </Text>
                        <Text fontSize={11}>
                            <Text bold>Longitude: </Text> {beachDetail?.longitude}
                        </Text>
                        <Text fontSize={11}>
                            <Text bold>Estado: </Text> {beachDetail?.state}
                        </Text>
                        <Text fontSize={11}>
                            <Text bold>Cidade: </Text> {beachDetail?.city}
                        </Text>
                        <Text fontSize={11}>
                            <Text bold>Último Ataque: </Text>
                            {beachDetail?.last_attack ? beachDetail.last_attack : 'Sem ocorrência'}
                        </Text>
                        <Text fontSize={11}>
                            <Text bold>Nº de Ataques: </Text> {beachDetail?.attack_count}
                        </Text>
                        
                        <Button 
                            onPress={toggleModal}
                            marginTop={15}
                            backgroundColor={"#00689d"}
                            shadow={"7"}
                        >
                            <Text color={"white"}>Fechar</Text>
                        </Button>
                    </VStack>
                </Modal> 
            )}
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });