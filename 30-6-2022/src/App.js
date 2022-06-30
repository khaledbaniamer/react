import Home from "./components/Home";
import Nav  from "./components/navbar";
import {BrowserRouter , Route, Router, Routes} from 'react-router-dom'
import List from "./components/list";
import Film from "./components/singleFilm";
import About from "./components/about";

function App() {
  return (

    <BrowserRouter>
    <Nav />
      <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="/list"  element={<List />} />
          <Route path="/about"  element={<About />} />
          <Route path="/film/:id"  element={<Film />} />
      </Routes>
    </BrowserRouter>
  

  );
}

export default App;
