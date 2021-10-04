import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native'


const EntradaDeDados = (props) => {

    const [descricao, setDescricao] = useState('')
    const capturarDescricao = (descricao) => {
        console.log(descricao)
        setDescricao(descricao)
    }

    const [fabricante, setFabricante] = useState('')
    const capturarFabricante = (fabricante) => {
        console.log(fabricante)
        setFabricante(fabricante)
    }

    // const obterProduto = () => {
       
    // }
    
    return (
        <View style={{marginTop: 30}}>
            <Text>Descrição</Text>
            <TextInput
                placeholder="Descrição deste produto"
                onChangeText={capturarDescricao}
                value={descricao}
            />
            <Text>Fabricante</Text>
            <TextInput
                placeholder="Fabricante deste produto"
                onChangeText={capturarFabricante}
                value={fabricante}
            />
            <Button
                title="OK"
                onPress={()=>{
                    props.sendParameter(descricao, fabricante)
                    setDescricao('')
                    setFabricante('')
                }}
            />
            
        </View>

    )
}

export default EntradaDeDados