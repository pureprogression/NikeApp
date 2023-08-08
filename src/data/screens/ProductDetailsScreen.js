import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    useWindowDimensions,
    ScrollView,
    Pressable,
} from 'react-native'
import products from '../products'

const ProductDetailsScreen = () => {
    const product = products[0]

    const { width } = useWindowDimensions()

    const addToCart = () => {
        console.warn('click!')
    }

    return (
        <View>
            <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ width, aspectRatio: 1 }}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={{ padding: 20 }}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>

                    {/* Price */}
                    <Text style={styles.price}>$ {product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>

            {/* Navigation icon */}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 30,
        marginVertical: 10,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'black',
        width: '90%',
        padding: 20,
        alignSelf: 'center',
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
})

export default ProductDetailsScreen
