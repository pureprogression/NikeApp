import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProductsScreen from './data/screens/ProductsScreen'
import ProductDetailsScreen from './data/screens/ProductDetailsScreen'
import ShoppingCart from './data/screens/ShoppingCart'
import { Pressable, Text } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
            >
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Cart')}
                                style={{ flexDirection: 'row' }}
                            >
                                <FontAwesome5
                                    name="shopping-cart"
                                    size={16}
                                    color={'gray'}
                                />
                                <Text
                                    style={{ fontWeight: '500', marginLeft: 5 }}
                                >
                                    1
                                </Text>
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Product Details"
                    component={ProductDetailsScreen}
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
