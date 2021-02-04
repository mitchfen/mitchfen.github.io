import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import About from './components/About'
import ProjectContainer from './components/ProjectContainer'
import Footer from './Footer'

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
              <a className="nav-link" href="/">About</a>
              <a className="nav-link" href="/ProjectContainer">Projects</a>
            </div>
          </nav>
          <hr/>
        <Route exact path='/' component={About}></Route>
        <Route path='/ProjectContainer' component={ProjectContainer}></Route>

      </div>
      
      {/* Right empty column for spacing*/}
      <div className="col-sm-1"></div>
    
    </div>
    </Router> 
  )
}

export default App