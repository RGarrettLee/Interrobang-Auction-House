// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard, ItemDetails, NotFound } from './components/pages';
// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path='/my-account' element={<Dashboard />}></Route>
            <Route path='/item-details' element={<ItemDetails />}></Route>
            <Route path='/logout' element={<ItemDetails />}></Route>
            <Route path="*" element={<NotFound/>} status={404} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
