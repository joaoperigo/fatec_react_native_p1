import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import EntradaDeDados from './EntradaDeDados'
import ExibeItens from './ExibeItens'

export default function App(props) {

  //const [produto, setProduto] = useState({})
  const [produtos, setProdutos] = useState([])
  const [contador, setContador] = useState(0)


  const obterProduto = (descricao, fabricante) => {
      setContador (contador + 1)
      //setProduto({descricao: descricao, fabricante: fabricante})
      setProdutos (produtos => [{key: contador.toString(), descricao: descricao, fabricante: fabricante}, ...produtos])
  }

  return (
    <View style={styles.container}>
      <EntradaDeDados
        sendParameter={obterProduto}
      /> 
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
      {/* Apenas consegui fazer o exibe itens com um problema, é necessário dar um ctrl+s no ExibeItens para que renderize a flatlist */}
      {/* <ExibeItens produtos={produtos}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
