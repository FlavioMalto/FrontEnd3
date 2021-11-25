import logo from './logo.svg';
import Greeting from './Components/Greeting';
import './App.css';

function App() {

  const user = {
    firstName: 'Turma',
    lastName: '01'
  }

  const banana = {
    firtName: 'ban',
    lastName: 'ana'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting user={banana} />
        <Video>
          url=""
        </Video>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste beatae aliquam assumenda laboriosam corporis provident maiores officia ab excepturi! Ullam, sed. Magnam totam sint voluptas, minus excepturi accusamus dolores.
        </p>
        <Greeting user={user} />
      </header>
    </div>
  );
}

export default App;
