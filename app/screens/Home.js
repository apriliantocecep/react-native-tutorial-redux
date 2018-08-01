import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

const Home = () => (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text>DECREMENT</Text>
        </TouchableOpacity>

        <Text>0</Text>

        <TouchableOpacity>
            <Text>INCREMENT</Text>
        </TouchableOpacity>
    </View>
)

export default Home;