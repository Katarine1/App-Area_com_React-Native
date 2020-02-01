import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Principal from './Principal';
import Retangulo from './Retangulo';
import Quadrado from './Quadrado';
import Circulo from './Circulo';

class Navegacao extends Component {
    render() {
        return(
            <View>
                <Text>Navegação</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Principal: {
        screen: Principal
    },
    Retangulo: {
        screen: Retangulo
    },
    Quadrado: {
        screen: Quadrado
    },
    Circulo: {
        screen: Circulo
    }
});

export default createAppContainer(AppNavigator);
