import './App.css';
import './styles/global.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
    <main className="app-content">
      <Outlet />
    </main>
      <Footer />
    </>
  );
}

export default App;
