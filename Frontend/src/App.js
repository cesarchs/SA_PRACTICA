import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <h1>PRACTICA 1 SOFTWARE AVANZADO - 201700634</h1>
      </header>
    </div>
  );
}

export default App;
