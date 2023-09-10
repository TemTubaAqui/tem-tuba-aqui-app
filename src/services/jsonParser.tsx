import jsonData from '../assets/beaches_vocabs.json';

export const jsonParser = () => {
    const beaches = jsonData.locais;

    const beachList = beaches.map((beach) => ({
        nome: beach.nome,
        latitude: beach.latitude,
        longitude: beach.longitude
    }));

    return beachList;
}