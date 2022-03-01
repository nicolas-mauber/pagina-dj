import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import DjsGrid from "./pages/DjsGrid";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/user">
            <Navbar conFondo={true}/>
            <DjsGrid />
          </Route>
          <Route path="/">
          <Navbar conFondo={false}/>
          <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
