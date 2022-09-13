import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar>
<Link to ="/">
  Home
</Link>
<Link to ="./contacto">
  Contacto
</Link>
</Navbar>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="Contacto" element={<Contacto/>} />
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
