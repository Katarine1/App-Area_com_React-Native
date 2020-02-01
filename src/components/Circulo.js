import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export default class Circulo extends Component {
    constructor(props){
        super(props);

        this.state= {
            raio: '',
            resultado: '0'
        };
    }

    alteraRaio(raio) {
        this.setState({raio : raio});
    }

    calcularArea() {
        let PI = Math.PI;
        let base = Math.pow(parseFloat(this.state.raio.toString().replace(",", ".")), 2);
        let area = PI * base;
        this.setState({resultado : Math.floor(area)});
        this.limpaCampo();
    }

    limpaCampo() {
        this.setState({raio: ''});
    }

    static navigationOptions = {
        title: "Círculo",
        headerStyle: { backgroundColor: '#3fa81e' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#FFF'
    }

    render() {
        return (
            <View style={estilos.principal}>
                <View style={estilos.vTitulo}>
                    <Text style={estilos.textos}>Área</Text>
                </View>
                <View style={estilos.vResultado}>
                    <Text style={estilos.textos}>{this.state.resultado}</Text>
                </View>
                <View style={estilos.vInputs}>
                    <TextInput style={estilos.txtInput} keyboardType="decimal-pad" placeholder="Informe o valor do Raio" placeholderTextColor="#41c219" onChangeText={raio => {this.alteraRaio(raio)}} value={this.state.raio} />
                </View>
                <View style={estilos.vBotao}>
                    <TouchableHighlight underlayColor="#41c219"
                        style={estilos.botao}
                        onPress={() => {this.calcularArea()}}
                    >
                        <Text style={estilos.textoBotao}>Calcular</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    principal: {
        flex: 9,
        backgroundColor: '#FFF'
    },
    vTitulo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vResultado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vInputs: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vBotao: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textos: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    txtInput: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#41c219',
        borderRadius: 15,
        width: 300
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    botao: {
        backgroundColor: '#41c219',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300   
    }
});
