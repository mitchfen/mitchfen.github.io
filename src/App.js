import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import About from './components/About'
import ProjectContainer from './components/ProjectContainer'

function App() {
  return (
    <Router>
    <div className="row">
      
      {/* Left empty column for spacing*/}
      <div className="col-sm-1"></div>
      
      {/* Main column which contains all components */}
      <div className="col-sm-10">
        
        {/* Navbar - Handle the routing */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Mitchell Fenner</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                {/*Nothing*/}
              </ul>
              <a className="nav-link" href="/personal_website">About</a>
              <a className="nav-link" href="/ProjectContainer">Projects</a>
            </div>
          </nav>
          <hr/>
        <Switch>
          <Route exact path='/personal_website' exact render = {() => <About />} ></Route>
          <Route exact path='/ProjectContainer' exact render = {() => <ProjectContainer />} ></Route>
        </Switch>
      </div>
      
      {/* Right empty column for spacing*/}
      <div className="col-sm-1"></div>
    
    </div>

    </Router> 
  )
}

export default App