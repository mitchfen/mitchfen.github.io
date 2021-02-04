import PropTypes from 'prop-types'

const Project = ({title}) => {
  return (
    <div id="projectID" class="container-fluid">
      <h3>{title}</h3>
      [<small>C++</small>]
      <p>
        • A text adventure game inspired by Zork.<br/>
        • My longest side project, I wrote this during my first year of programming.
      </p>
      [<a class="ghLink" href="https://github.com/mitchfen/Adrift" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>
  )
}

Project.propTypes = {
  title: 'Project'
}

export default Project
