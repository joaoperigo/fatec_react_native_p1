import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    FlatList
} from 'react-native'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            produtos: this.props.produtos
        }
    }

    render() {
        const {produtos} = this.state
        
        console.log(produtos)
        return (
            <FlatList style={{flex : 1, flexGrow :1}}
            data={produtos}/*coleção de produtos*/
            renderItem={ /*mapeamento*/
            produto => ( /*dado um produto, gera uma view*/
              <View >
                <Text>{produto.item.key}</Text>
                <Text>{produto.item.descricao}</Text>
                <Text style={{marginBottom: 20}}>{produto.item.fabricante}</Text>
              </View>
            )
            }
            />
        );
    }
}