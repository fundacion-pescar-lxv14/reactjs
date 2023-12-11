// Archivos externos
import './App.css';
import logo from './logo.svg';
// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
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