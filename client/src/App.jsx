// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard, ItemDetails } from './components/pages';
// Stylesheet
//import "./App.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

//Create MUI Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      light: '#d1b7ad',
      main: '#a0877e',
      dark: '#715a52',
      contrast: '',
    },
    secondary: {
      light: '#ffa270',
      main: '#ff7043',
      dark: '#c63f17',
    }

  }
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  //link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
