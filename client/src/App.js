import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';



function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     <Navbar />
     <Route exact path="/about" component={About} />

    </div>
    </Router>
  );
}

export default App;
