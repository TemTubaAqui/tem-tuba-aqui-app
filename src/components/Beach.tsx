
import { TouchableOpacity, Image, Text, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    name: String;
};

export function Beach({ name, ...rest }: Props) {


    return (
        <TouchableOpacity style={{ backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 4, borderBottomEndRadius: 30, borderBottomStartRadius: 20 }}>
            <Image
                style={{ resizeMode: 'contain' }}
                source={require('../assets/Beachicon.png')}
                alt='foto da praia'
            />
            <Text style={{
                marginLeft: 8, color: '#192448',
                fontSize: 16
            }}>{name}</Text>
        </TouchableOpacity >
    );

}