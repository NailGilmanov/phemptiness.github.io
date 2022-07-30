import Header from "./Components/Header/Header";
import Nav from './Components/Nav/Nav'
import Carousel from './Components/Carousel/Carousel'
import Home from './Components/Home/Home'
import Contact from "./Components/Contact/Contact";
import Helpbar from "./Components/Helpbar/Helpbar";
import ScrollBtn from "./Components/ScrollBtn/ScrollBtn";
import Works from './Components/Works/Works'
import Street from './Components/Street/Street'
import Individual from "./Components/Individual/Individual";
import Events from "./Components/Events/Events";
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

import './media.css'

function App() {
  const closeMenu = () => {
    document.querySelector('nav').classList.add('close')
  }

  return (
    <Router>
      <div className="App">
        < Nav />
        < Header />
        <div onClick={closeMenu} className="app">
          <Routes >
            <Route path="/" element={
              <>
                < Carousel />
                < Home />
              </>
            } >
            </Route>
            <Route path="/works" element={
              <>
                < Works />
              </>
            } >
            </Route>
            <Route path="/works/street" element={
              <>
                < Street />
              </>
            } >
            </Route>
            <Route path="/works/individual" element={
              <>
                < Individual />
              </>
            } >
            </Route>
            <Route path="/works/events" element={
              <>
                < Events />
              </>
            } >
            </Route>
          </Routes >
          < Contact />
          < Helpbar />
          < ScrollBtn />
        </div>
      </div>
    </Router>
  );
}

export default App;
