import PropTypes from 'prop-types'

const Project = ({title, repoLink, bulletPoint0, bulletPoint1, bulletPoint2}) => {
  let repoText = "View the code on GitHub 🡥"
  if(repoLink === "") {
    repoText = ""
  }
  return (
    <>
    <div className="row">
      {/* Middle column with content */}
      <div id="projectID" className="col-sm-9">
        <h3>{title}</h3>
        {/* 
        [<small>Python</small>]
        [<small>MySQL</small>]
        [<small>JavaScript</small>]
        [<small>Flask</small>]
        [<small>Bootstrap CSS</small>]
        */}
        
        {bulletPoint0}
        <br/><br/>
        {bulletPoint1}
        <br/><br/>
        {bulletPoint2}
        <br/>
        <a href={repoLink} rel="noopener noreferrer" target="_blank">{repoText}</a>
        
      </div>
    </div>  
  </>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  repoLink: PropTypes.string,
  bulletPoint0: PropTypes.string,
  bulletPoint1: PropTypes.string,
  bulletPoint2: PropTypes.string,
}

export default Project
