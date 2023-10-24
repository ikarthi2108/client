import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Authentication/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
