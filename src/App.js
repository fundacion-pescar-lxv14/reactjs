// Archivos externos
import './App.css';
import logo from './logo.svg';
import menu from './components/links.json';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Componentes
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation brand="PescarShops" links={menu}/>
      <Header 
        logo={logo} 
        title="ReactJS" 
        subtitle="create-react-app template">
      </Header>
      <Footer 
        author="Cristian Racedo" 
        copy="Fundacion Pescar" 
        mail="cristiandracedo@hotmail.com">
      </Footer>
    </>
  );
}

export default App;