import {LoginProvider} from './context/loginContext'
/* import { LoginComponent } from "./Components/LoginComponent"; */
/* import RegisterComponent from './Components/RegisterComponent' */
/* import Operations from './Components/operations/Operations' */
import Categories from './Components/categories/Categories'

function App() {
  return (
    <LoginProvider >
      <div >
          <Categories />
      </div>
    </LoginProvider>
  );
}

export default App;
