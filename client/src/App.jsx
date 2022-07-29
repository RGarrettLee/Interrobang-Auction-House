// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard } from './components/pages';
// Stylesheet
import "./App.css"


function App() {
  return (
    <Router>

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
