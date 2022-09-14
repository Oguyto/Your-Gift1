import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Login';
import Gift from './Gift';
import Home from './Home';
import Meet from './Meet';
import Sure from './Sure';
import Nointerested from "./Nointerested";

function App () {
    //const [token, setToken] = useState();
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Gift" element={<Gift />}></Route>
          <Route path="/Meet" element={<Meet />}></Route>
          <Route path="/Sure" element={<Sure />}></Route>
          <Route path="/Nointerested" element={<Nointerested />}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;