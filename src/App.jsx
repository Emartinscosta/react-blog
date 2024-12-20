import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Sac from "./pages/Sac/Sac";
import Sobre from "./pages/Sobre/Sobre";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup/Singup";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sac" element={<Sac />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Transpiler (Transpilador) -> Babel