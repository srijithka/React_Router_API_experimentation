import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Start from './components/Start'
import UserDetail from './components/UserDeatil'
import InputUser from './components/InputUser'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
 
  return (
    <Router>
      <div className="App">
        <Nav/>
        <InputUser/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/start" exact component={Start}/>
          <Route path="/start/:id" component={UserDetail}/>
        </Switch>
      
      </div>
    </Router>
  );
}
const Home=()=>
{
  return(
  <div>
    {
  //<h1>HOME page</h1>
    }
  </div>
  )
}

export default App;
