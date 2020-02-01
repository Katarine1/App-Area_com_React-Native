import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';

export default class Retangulo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            base: '',
            altura: '',
            resultado: '0'
        };
    }

    alteraBase(base) {
        this.setState({base : base});
    }

    alteraAltura(altura) {
        this.setState({altura: altura});
    }

    calcularArea() {
        let area = parseFloat(this.state.base.toString().replace(",",".")) * parseFloat(this.state.altura.toString().replace(",","."));        
        this.setState({resultado: Math.floor(area)});  
        this.limpaCampos();  
    }

    limpaCampos() {
        this.setState({base: '', altura: ''});
    }
    
    static navigationOptions = {
        title: "Retângulo",
        headerStyle: { backgroundColor: '#3fa81e' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#FFF'
    };

    render() {
        return (
            <View style={estilos.principal}>                
                <View style={estilos.vTitulo}>
                    <Text style={estilos.textos}>Área</Text>
                </View>
                <View style={estilos.vResultado}>
                    <Text style={estilos.textos}>{this.state.resultado}</Text>
                </View>                              
                <View style={estilos.vInput}>
                    <TextInput style={estilos.txtInput} keyboardType="decimal-pad" placeholder="Informe o valor da Base" placeholderTextColor="#41c219" onChangeText={base => {this.alteraBase(base)}} value={this.state.base}/>
                    <TextInput style={estilos.txtInput} keyboardType="decimal-pad" placeholder="Informe o valor da Altura" placeholderTextColor="#41c219" onChangeText={altura => {this.alteraAltura(altura)}} value={this.state.altura}/>
                </View>                                
                <View style={estilos.vBotao}>
                    <TouchableHighlight  underlayColor='#41c219'  
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
        alignItems: 'center',
        paddingTop: 10
    },
    vResultado:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    vInput: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vBotao: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    txtInput: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        borderWidth: 2,
        borderColor: '#41c219',
        borderRadius: 15,
        width: 300,
        marginBottom: 10
    },
    textos: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    botao:{        
        backgroundColor:'#41c219',
        padding: 10,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
