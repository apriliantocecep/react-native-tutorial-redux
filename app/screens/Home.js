import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

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
    },
    containerText: {
        width: 100,
        alignItems: 'center'
    },
    counterText: {
        fontSize: 20,
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
        // console.log(typeof parseInt(text))
        this.props.setRangeCounter(parseInt(text || 1))
    }

    handlePress = () => {
        this.props.resetCurrentCounter()
    }

    render() {
        const { counter, range, increaseCounter, decreaseCounter, setRangeCounter } = this.props;

        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                placeholder="Input range counter"
                                onChangeText={(text) => this.handleChangeText(text)}
                            />
                            <TouchableOpacity
                                onPress={this.handlePress}
                            >
                                <Text>Reset Counter</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.counterContainer}>
                            <TouchableOpacity
                                style={styles.buttonTouch}
                                onPress={decreaseCounter}
                            >
                                <Text style={styles.buttonText}>DECREMENT</Text>
                            </TouchableOpacity>

                            <View
                                style={styles.containerText}
                            >
                                <Text
                                    style={styles.counterText}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {counter}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.buttonTouch}
                                onPress={increaseCounter}
                            >
                                <Text style={styles.buttonText}>INCREMENT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

Home.propTypes = {
    range: PropTypes.number,
    counter: PropTypes.number,
    increaseCounter: PropTypes.func,
    decreaseCounter: PropTypes.func,
    setRange: PropTypes.func,
    resetCurrentCounter: PropTypes.func
}

export default Home;