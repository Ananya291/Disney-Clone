import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path='/detail' element={<Detail />}> 
          </Route>
          <Route exact path='/' element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
