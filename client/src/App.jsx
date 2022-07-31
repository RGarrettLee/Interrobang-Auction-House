// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard, ItemDetails, Register, NotFound, Login } from './components/pages';
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
            <Route path='/login' element={<Login />}></Route>
            <Route path='/logout' element={<ItemDetails />}></Route>
            <Route path="/notfound" element={<NotFound />} status={404} />
            <Route path="/register" element={<Register />} status={404} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
