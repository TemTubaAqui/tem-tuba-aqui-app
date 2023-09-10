import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabBar } from '../components/TabBar';
import InfoPraia from '../screens/InfoPraia';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="TabBar" component={TabBar} />
                <Stack.Screen options={{headerShown: false}} name="InfoPraia" component={InfoPraia} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
