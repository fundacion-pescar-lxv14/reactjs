// Archivos externos
import './App.css';
import logo from './logo.svg';
import menu from './components/links.json';
import social from './components/social.json';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Font Awesome
import 'fontawesome-free/css/all.min.css';
// Componentes
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Social } from './components/Social';

function App() {
  return (
    <>
      <Navigation brand="PescarShops" links={menu}/>
      <Header 
        logo={logo} 
        title="ReactJS" 
        subtitle="create-react-app template">
      </Header>
      <Social links={social}/>
      <Footer 
        author="Cristian Racedo" 
        copy="Fundacion Pescar" 
        mail="cristiandracedo@hotmail.com">
      </Footer>
    </>
  );
}

export default App;