import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 20
    },
    buttonTouch: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#00A6FF'
    },
    buttonText: {
        color: '#fff'
    }
})

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 0
        }
    }

    handleChangeText = (text) => {
        this.setState({text})
    }

    handlePress = () => {
        this.props.setRangeCounter(this.state.text)
    }

    render() {
        const {counter, range, increaseCounter, decreaseCounter, setRangeCounter} = this.props;

        return (
            <View style={styles.container}>
    
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Input range number" 
                        onChangeText={(text) => this.handleChangeText(text)}
                    />
                    <TouchableOpacity 
                        style={styles.buttonTouch}
                        onPress={this.handlePress}
                    >
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.counterContainer}>
                    <TouchableOpacity 
                        onPress={decreaseCounter}
                    >
                        <Text>DECREMENT</Text>
                    </TouchableOpacity>
            
                    <Text>{counter}</Text>
            
                    <TouchableOpacity
                        onPress={increaseCounter}
                    >
                        <Text>INCREMENT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

Home.propTypes = {
    counter: PropTypes.number,
    increaseCounter: PropTypes.func,
    decreaseCounter: PropTypes.func,
    setRange: PropTypes.func,
}

export default Home;