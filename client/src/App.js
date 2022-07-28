//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import "./components/styles/App.css"
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
