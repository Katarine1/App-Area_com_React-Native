import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';

export default class Principal extends Component {
    static navigationOptions = {
        title:"Figura",
        headerStyle: { backgroundColor: '#3fa81e' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#FFF'
    }

    render() {
        return (
            <View style={estilos.principal}>
                <ScrollView >                
                    <View style={estilos.vTitulo}>
                        <Text style={estilos.textTitulo}>Área das Figuras</Text>
                    </View>
                    <View style={estilos.vConteudo}>
                        <View style={estilos.vBotoes}>
                            <TouchableHighlight  underlayColor='#41c219'  
                                style={estilos.botoes}                    
                                onPress={() => this.props.navigation.navigate('Retangulo')}
                            >
                                <Text style={estilos.textBotoes}>Retângulo</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={estilos.vBotoes}>
                            <TouchableHighlight  underlayColor='#41c219'
                                style={estilos.botoes}                      
                                onPress={() => this.props.navigation.navigate('Quadrado')}
                            >
                                <Text style={estilos.textBotoes}>Quadrado</Text>
                            </TouchableHighlight>
                        </View>    
                        <View style={estilos.vBotoes}>
                            <TouchableHighlight underlayColor='#41c219'
                                style={estilos.botoes}                      
                                onPress={() => this.props.navigation.navigate('Circulo')}
                            >
                                <Text style={estilos.textBotoes}>Círculo</Text>
                            </TouchableHighlight>
                        </View>                    
                    </View>
                </ScrollView>
                <View style={estilos.vFooter}>
                    <Text style={estilos.textFooter}>@kba 2020</Text>
                </View>
           </View>            
        );
    }    
}

const estilos = StyleSheet.create({
    principal: {
        flex: 13,
        backgroundColor: '#FFF'        
    },
    vTitulo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    vConteudo: {
        flex: 10,
        justifyContent: 'flex-start',
        padding: 20
    },
    vBotoes: {
        marginBottom: 10,
        marginTop: 10
    },
    vFooter: {
        flex: 1,
        backgroundColor: '#41c219',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitulo:{
        fontSize: 28,
        fontWeight: 'bold'
    },    
    textBotoes: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    botoes: {
        backgroundColor: '#41c219',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },    
    textFooter: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
