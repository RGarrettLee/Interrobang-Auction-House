// Page Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Add Elements to App
import { Header, Footer } from './components/elements';
// Add Pages to App
import { Home, Dashboard, ItemDetails, Register, NotFound, Login, Admin } from './components/pages';
// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css"
//Appolo Client
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from '@apollo/client/link/error';
//Create MUI Theme
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/Styles';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`graphql error: ${message}`);
    });
  }
})

const link = from([
  errorLink, 
  new HttpLink({uri: "http://localhost:6969/graphql"})

])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})

function App() {
  return (<ApolloProvider client={client}>
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
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* <Route
            path="/orderHistory"
            element={</>}></Route> */}

            {/* <Route
            path="/receipt"
            element={</>}></Route> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
  );
}

export default App;
