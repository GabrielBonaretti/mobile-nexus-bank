// styled components
import { InputStyled, PlaceHolder } from "./style";

// react
import { useRef, useState } from 'react';

import {
    Animated,
    View,
} from 'react-native';

const Input = ({ content, typePassword = false, onChangeText, value }) => {
    const positionY = useRef(new Animated.Value(1)).current;
    const positionX = useRef(new Animated.Value(1)).current;
    const size = useRef(new Animated.Value(1)).current;

    const up = () => {
        Animated.timing(positionY, {
            toValue: -15,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(positionX, {
            toValue: -20,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(size, {
            toValue: 0.80,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };


    const down = () => {
        Animated.timing(positionY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(positionX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(size, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <View>
                <Animated.View style={{
                    transform: [
                        { translateY: positionY },
                        { translateX: positionX },
                        { scale: size },
                    ]
                }}>
                    <PlaceHolder>{content}</PlaceHolder>
                </Animated.View>

                {value.length > 0 ? (
                    <InputStyled
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={typePassword}
                    />
                ) : (
                    <InputStyled
                        $teste
                        value={value}
                        onFocus={up}
                        onBlur={down}
                        onChangeText={onChangeText}
                        secureTextEntry={typePassword}
                    />
                )}

            </View>
        </>
    );
}

export default Input;
