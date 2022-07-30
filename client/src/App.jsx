// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard, ItemDetails } from './components/pages';
// Stylesheet
//import "./App.css"

//Create MUI Theme
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/Styles';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>

        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/item-details' element={<ItemDetails />}></Route>

          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
