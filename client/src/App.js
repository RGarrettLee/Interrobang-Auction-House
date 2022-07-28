//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import './App.css';
import Home from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
function App() {
  return (
    <Router>

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/portfolio' element={<Dashboard />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
