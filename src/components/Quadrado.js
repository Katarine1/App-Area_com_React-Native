import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StatusBar, StyleSheet } from 'react-native';

export default class Quadrado extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lado: '',
            resultado: '0'
        };
    }

    alteraLado(lado){
        this.setState({lado : lado});
    }

    calcularArea() {
        let area = parseFloat(this.state.lado.toString().replace(",", ".")) * 4;
        this.setState({resultado : Math.floor(area)});
        this.limpaCampo();
    }

    limpaCampo() {
        this.setState({lado: ''});
    }

    static navigationOptions = {
        title: "Quadrado",
        headerStyle: { backgroundColor: '#3fa81e' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#FFF' 
    }

    render() {
        return (            
            <View style={estilos.principal}>
                <StatusBar 
                    backgroundColor="#3fa81e"
                />
                <View style={estilos.vTitulo}>
                    <Text style={estilos.textos}>Área</Text>
                </View>
                <View style={estilos.vResposta}>
                    <Text style={estilos.textos}>{this.state.resultado}</Text>
                </View>
                <View style={estilos.vInputs}>
                    <TextInput style={estilos.txtInput} keyboardType="decimal-pad" placeholder="Informe o valor do Lado" placeholderTextColor="#41c219" onChangeText={lado => {this.alteraLado(lado)}} value={this.state.lado}/>
                </View>
                <View style={estilos.vBotao}>
                    <TouchableHighlight underlayColor="#41c219"
                        style={estilos.botao}
                        onPress={lado => {this.calcularArea(lado)}}
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
        alignItems: 'center',
        paddingTop: 10
    },
    vResposta: {
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
        justifyContent: 'flex-start',
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'        
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#41c219',
        width: 300,
        borderRadius: 10,
        padding: 10
    }
});
