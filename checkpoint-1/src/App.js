/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Projetos from './components/Projetos';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Banner>

      </Banner>
      <Projetos/>
      <Footer/>
      
      
    </div>
    </>
  );
}

export default App;
