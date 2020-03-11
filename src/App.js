import React from 'react';
import './App.css';
import MaRiNavbar from './navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundary from './components/other/ErrorBoundary'
import SecureRoute from './components/other/SecureRoute'
import LoginPage from './components/pages/loginPage/LoginPage';
import { logout } from './services/AuthenticationService'
import CustomerListPage from './components/pages/customerListPage/CustomerListPage';
import CustomerFormPage from './components/pages/customerFormPage/CustomerFormPage';

function App() {
  const [authorization, setAuthorization] = React.useState(localStorage.getItem("token"))

  return (
    <div className="App">
      <MaRiNavbar authorization={authorization}/>
      <Router>
        <ErrorBoundary>
          <Route exact path="/login" render={(props) => <LoginPage {...props} setAuthorization={setAuthorization} />} />
          <Route exact path="/logout" render={logout} />
          <SecureRoute exact path="/customers" component={CustomerListPage} />
          <SecureRoute exact path="/customers/:id" component={CustomerFormPage} />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
