import * as Location from 'expo-location';

export const askForLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== 'granted') {
      console.error('Permissão de localização negada');
      return;
    }
  };

export const getCoords = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      return location
    } catch (error) {
      console.error('Erro ao obter a localização', error);
    }
  };

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
    const rad = Math.PI / 180;
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const earthRadius = 6371;
    const distance = earthRadius * c;
    return distance;
  }
  
  export interface LocationBeach {
    nome: string,
    latitude: number,
    longitude: number
  }

  export function findNearestPoints(myLat: number, myLon: number, allPoints: LocationBeach[]) {
    const sortedPoints = allPoints.map((point) => ({
      point,
      distance: haversine(myLat, myLon, point.latitude, point.longitude),
    }));
  
    sortedPoints.sort((a, b) => a.distance - b.distance);
  
    return sortedPoints.slice(0, 10).map((item) => item.point);
  }