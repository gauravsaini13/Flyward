import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Flyward from "./components/Flywards/Flyward";
import About from "./app/about/About";
import Private from "./app/private/Private";
import Corporate from "./app/Corporate/Corporate";
import Career from "./app/Career/Careers";
import Contact from "./app/Contacts/Contact";


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Flyward />} />
                <Route path="/about" element={<About />} />
                <Route path="/private" element={<Private />} />
                <Route path="/corporate" element={<Corporate />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>


        </div>
    )
}


export default App;