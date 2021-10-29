import {LoginProvider} from './context/loginContext'
/* import { LoginComponent } from "./Components/LoginComponent"; */
/* import RegisterComponent from './Components/RegisterComponent' */

import HomePage from './Pages/HomePage'

function App() {
  return (
    <LoginProvider >
        <div >
           <HomePage />
        </div>
    </LoginProvider>
  );
}

export default App;
