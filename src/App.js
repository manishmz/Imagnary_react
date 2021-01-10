import './App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Card from './Components/Cards';
import AgeCalculator from "./Components/AgeCalculator";
function App() {
  return (
    <Router>
      <Route path="/">
        <div className="navbar">
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>
      </Route>
      <Route path="/about" exact>
        <Card title="About us">
          Hello ji, I am n thoda shy wala ji
        </Card>
      </Route>
      <Route path="/contact" exact>
        <Card title="Contact us">
          Send email on abcdefg@jaagteraho.com
        </Card>
      </Route>
      <Route path="/agecalculator" exact>
        <AgeCalculator/>
      </Route>
    </Router>
  );
}

export default App;
