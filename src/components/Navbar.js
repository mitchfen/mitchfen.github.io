const Navbar = ({title, link1, link2, button0, button1}) => {
    return (
        <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                {/*Nothing*/}
              </ul> 
              <a className="nav-link" href={link1}>{button0}</a>
              <a className="nav-link" href={link2}>{button1}</a>
            </div>
        </nav>
        </>
    )
}

Navbar.defaultProps = {
  title: "Mitchell Fenner",
  link1: "/",
  link2: "/",
  button0: "",
  button1: ""
}

export default Navbar
