import {Component} from 'react'; 
import './App.scss';

export default class Lista extends Component {
  listaInicial = [{
    id:0,
    nome: 'melancia',
    imagem: 'https://revistacampoenegocios.com.br/wp-content/uploads/2020/11/Melancia-01-1024x725.jpg'
  },
  {
    id:1,
    nome: 'batata',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1135/1135501.png'
  },
  {
    id:2,
    nome: 'banana',
    imagem: 'https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_615x300.jpg'
  },
  {
    id:3,
    nome: 'uva',
    imagem: 'https://tinyurl.com/6hbw43vs'
  },
  {
    id:4,
    nome: 'biscoito',
    imagem: 'https://shortest.link/1CMu'
  },
  ]

  constructor(){
    super();
    this.state = {
      produtos: this.listaInicial
    }
  }


remover = (id) => {
  /*vai pegar todos os objetos do array diferentes difentes do id informado como parâmetro.*/
  const listaNova = this.state.produtos.filter(produtos => produtos.id !== id)
  this.setState({
    produtos:listaNova
  })
}

restore = () => {
  this.setState({
      produtos:this.listaInicial
  })
}

render() {
    return (
      <div className = 'container'>
      <button className = 'restart-btn' onClick={this.restore}>Restaurar a lista</button>
      <ul className = 'list'>
        {

          this.state.produtos.map(({ id, imagem, nome }) => {
            return (
              <li onClick={() => this.remover(id)}>
                <img src={imagem} alt={nome} />
                <h3>{nome}</h3>
              </li>
            )
          })

        }
      </ul>
      </div>
    )
  }

}
