import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ProductsScreen from './src/data/screens/ProductsScreen'
import ProductDetailsScreen from './src/data/screens/ProductDetailsScreen'
import ShoppingCart from './src/data/screens/ShoppingCart'

export default function App() {
    return (
        <View style={styles.container}>
            {/* <ProductsScreen /> */}
            {/* <ProductDetailsScreen /> */}
            <ShoppingCart />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
