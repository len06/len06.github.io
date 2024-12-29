import {React} from 'react';
import './App.css';
import './styles/global.css';
import Header from './components/Header/Header.tsx';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
    <main className="app-content">
      <Outlet />
    </main>
    </>
  );
}

export default App;
