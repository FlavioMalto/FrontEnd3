import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  const empresa = {
    nome: "Minha empresa",
    cnpj: "123456789/1234"
  }
  return (
    <>
    <div className="App">
      <Header>

      </Header>

      <Banner>
        Boa tarde
      </Banner>

      <Footer empresa={empresa}>

      </Footer>
     
    </div>
    </>
  );
}

export default App;
