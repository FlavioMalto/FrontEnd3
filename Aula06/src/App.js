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
     <ClassComponent nome="Nicolas" estaNaLista={true} />
     <ClassComponent nome="Pedro" estaNaLista={false} />
     <ClassComponent nome="Carolina" estaNaLista={true} />
     <h3>Tarefas: </h3>
     <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
     <FunctionComponent nome="Pedro" tarefa="pizza" />
     <FunctionComponent nome="Carolina" tarefa="bebidas" />

    
    </div>
    </>
  );
}

export default App;
