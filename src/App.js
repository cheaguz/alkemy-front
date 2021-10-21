import {LoginProvider} from './context/loginContext'
import { LoginComponent } from "./Components/LoginComponent";

function App() {
  return (
    <LoginProvider >
      <div >
        <LoginComponent />
      </div>
    </LoginProvider>
  );
}

export default App;
