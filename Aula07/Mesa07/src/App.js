import ClassComponent from './components/ClassComponents';
import FunctionComponent from './components/FunctionComponents';
import './App.css';

function App() {

const lista = [
  {
    nome: 'Nicolas',
    estaNaLista: true,
    tarefa: 'batata-frita'
  },
  {
    nome: 'Pedro',
    estaNaLista: false,
    tarefa: 'pizza'
  },
  {
    nome: 'Carolina',
    estaNaLista: true,
    tarefa: 'bebidas'
  }
]

  return (
    <>
      <div className="App">
        <h3>Convidado:</h3>
        {lista.map(pessoa => {
          return (
            <ClassComponent nome={pessoa.nome} estaNaLista={pessoa.estaNaLista} />
          )
        })}

        <h3>Tarefas: </h3>
        {lista.map(pessoa => {
          return (
            <FunctionComponent pessoa={pessoa} />
          )
        })}

      </div>
    </>
  );
}

export default App;
