import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Teste from '../screens/Teste';
import { TabBar } from '../components/TabBar';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="TabBar" component={TabBar} />
                <Stack.Screen name="Teste" component={Teste} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}