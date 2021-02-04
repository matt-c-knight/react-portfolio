import './App.css';
import Header from './components/Header';
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     {/* <Navbar /> */}
     <Route exact path="/about" component={About} />
     <Route exact path="/projects" component={Portfolio} />
     <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
