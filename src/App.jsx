import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Studio from './pages/Studio/Studio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/studio' element={<Studio/>}/>
      </Routes>
    </div>
  );
}

export default App;
