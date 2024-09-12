
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NoteFeed from './components/noteFeed/NoteFeed';

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/note' element={<NoteFeed/>}/>
     </Routes>
    </div>
  );
}

export default App;
