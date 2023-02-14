import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import './css/style.css'
import './css/bootstrap.min.css'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About/about'
import Services from './Services/services'
import Contact from './Contact/contact';
import Appointment from './Appointment/appointment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Services />}/>
        <Route exact path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
