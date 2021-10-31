import {BrowserRouter as Router,Route,} from "react-router-dom";

import {LoginProvider} from './context/loginContext'
 import { LoginComponent } from "./Components/LoginComponent"; 
 import RegisterComponent from './Components/RegisterComponent'
 import HomePage from './Pages/HomePage'


function App() {
  return (
      <LoginProvider >
        <Router>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/register" component={RegisterComponent}/>
          <Route exact path='/' component={HomePage} />
        </Router>
    </LoginProvider>
  );
}

export default App;
