import './App.css';
import  React  from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Register from './components/users/Register';
import Dashboard from './components/homes/Dashboard';
import SearchForm from './components/homes/SearchForm';
import ShowFive from './components/homes/ShowFive';
import UpdateHome from './components/homes/UpdateHome';
import HomeLibrary from './components/homes/HomeLibrary';
import HomeByCity from './components/homes/HomeByCity';
import HomeByPop from './components/homes/HomeByPop';
import HomeByPrice from './components/homes/HomeByPrice';
import OneHome from './components/homes/OneHome';
import Main from './views/Main';
import Login from './components/users/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/allHomes' element={<HomeLibrary/>}/>
          <Route path='/main' element={<Main/>}default/>
          <Route path='/newHomes' element={<SearchForm/>}/>
          <Route path='/homeByCity' element={<HomeByCity/>}/>
          <Route path='/homeByPop' element={<HomeByPop/>}/>
          <Route path='/homeByPrice' element={<HomeByPrice/>}/>
          <Route path='/onHome/:id' element={<OneHome/>}/>
          <Route path='/showFive/:id' element={<ShowFive/>}/>
          <Route path='/updateHome/:id' element={<UpdateHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;