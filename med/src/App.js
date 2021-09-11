// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Shop from './components/Shop';
import Member from './components/Member';
import Workflow from './components/Workflow';
import Book from './components/Book';
import './App.css';
import FeatureSoon from './components/FeatureSoon';
import Landing from './components/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
     
      <Router>
      <Navbar />
        <Switch>
           
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/track"><FeatureSoon/></Route>
          <Route  exact path="/shop"><Shop/></Route>
          <Route  exact path="/check"><FeatureSoon /></Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
