import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import ViewUser from "./pages/ViewUser";
import About from "./pages/About";
import Footer from "./components/Footer.jsx"
function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<AddUser />} />
                    <Route path="/users" element={<ViewUser />} />
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
        ;
}

export default App;
