import logoOIM from './assets/images/logo_OIM.webp';
import './App.css';
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

function App() {
  const company={
    logo: logoOIM,
    nombre: 'Escuela Olímpica de Matemática',
    slogan: 'Separa tu clase ¡Ya!'
  }
  const creditos={
    year: new Date().getFullYear(),
    autor: 'Eduardo Del Carpio Talaverano'
  }
  return (
    <>
      <Header company={company}/>
      <Footer creditos={creditos}/>
    </>
    
  );
}

export default App;
