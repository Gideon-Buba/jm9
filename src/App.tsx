import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/pages/Home";
import { Events } from "./components/pages/Events";
import { Gallery } from "./components/pages/Gallery";
import { Support } from "./components/pages/Support";
import { Media } from "./components/pages/Media";
import { Apply } from "./components/pages/Apply";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/support" element={<Support />} />
        <Route path="/media" element={<Media />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
=======
import Nav from "./components/Navs/Nav.tsx";
function App() {

  return ( 
    <div className="bg-blur-950">
        <Nav/>
    </div>
  )
}

export default App;
