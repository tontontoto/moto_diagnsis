import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
// components
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/diagnosis' element={<Diagnosis/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;