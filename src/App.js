import logoOIM from './assets/images/logo_OIM.webp';
import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  const company = {
    logo: logoOIM,
    name: 'Escuela Olímpica de Matemática',
    slogan: 'Separa tu clase ¡Ya!'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Eduardo Del Carpio'
  };

  return (
    <>
      <Header company={company} />
      <main className="overflow-hidden">
        <AppointmentsPage />
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;
