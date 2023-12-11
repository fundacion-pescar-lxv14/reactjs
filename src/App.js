// Archivos externos
import './App.css';
import logo from './logo.svg';
// Componentes
import Header from './components/Header';

function App() {
  return (
    <>
      <Header logo={logo} title="ReactJS" subtitle="create-react-app template"/>
    </>
  );
}

export default App;