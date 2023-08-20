
import { TouchableOpacity, Image, Linking } from 'react-native';

export function EmergencyButton() {
    const handlePress = () => {
        Linking.openURL('tel:193');
    };

    return (
        <TouchableOpacity onPress={handlePress}
            style={{
                width: 65,
                height: 65,
                borderRadius: 50,
                position: 'absolute',
                bottom: 95,
                right: 13,
                backgroundColor: '#FF3131',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                source={require('../assets/Sos.png')}
                alt='botão que possue uma imagem de um telefone e SOS'

            />
        </TouchableOpacity>
    );
}