import {LoginProvider} from './context/loginContext'
/* import { LoginComponent } from "./Components/LoginComponent"; */
/* import RegisterComponent from './Components/RegisterComponent' */
import Operations from './Components/operations/Operations'

function App() {
  return (
    <LoginProvider >
      <div >
          <Operations />
      </div>
    </LoginProvider>
  );
}

export default App;
