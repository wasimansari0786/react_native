import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import ProductScreen from '../screen/product/ProductScreen';
import cartscreen from '../screen/product/CartScreen';
import ProductDetailScreen from '../screen/product/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={cartscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
