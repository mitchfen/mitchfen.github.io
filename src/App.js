import './App.css';
import React from 'react';
import headshotImage from './assets/headshot.jpg'
import pgpKey from './assets/mitchfen.asc'

function App() {
  return (
    <div className="App">

    <div className="row">

    {/* Left empty column */}
    <div className="col-sm-2">

    </div>

    <div className="col-sm-8">
      
      <header className="App-header">
        Under construction - Redesigning with React
      </header>
      
      <div className="row">
        <div className="col-sm-3">
          <img src={headshotImage} width="100%" alt="My cute face."/>
        </div>
        <div className="col-sm-9">
        <h2>About</h2>
      {/* <img src={headshotImage} width="100%" alt="My cute face"></img> */}
      <p>Bachelors of Science in microbiology 🔬
      <br></br>
      Nearly finished with my second Bachelors in computer science 🖥️
      <br></br>
      <br></br>
      By pursuing software engineering, I can constantly learn new technologies and skills. I am well suited to the agile methodology and enjoy a fast paced work environment.
      <br></br>
      <br></br>
      GitHub: <a href="https://github.com/mitchfen" rel="noopener noreferrer" target="_blank">mitchfen</a>
      <br></br>
      Email: <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
      <br></br>
      LinkedIn: <a href="https://www.linkedin.com/in/mitchfen/">mitchfen</a>
      <br></br>
      PGP Public key: <a href={pgpKey} rel="noopener noreferrer" target="_blank">4AF2 B4C0 9559 2000 &#8595;</a>
      <br></br>
      </p>
        </div>
      </div>

      <hr></hr>
      <h2>Languages</h2>
      <p>
      <strong> A lot: </strong>Java • C++ • Python • HTML • CSS • Javascript
      <br></br>
      <strong> A little: </strong> C • 68K assembly • LaTex • Go
      <br></br>
      </p>
      <hr></hr>
      <h2>Frameworks</h2>
      <p>Flask • Bootstrap</p>
      <hr></hr>
      <h2>Some Tools I know</h2>
      <p>Visual studio • Android Studio • pfSense • Virtualbox • Vsphere • QEMU • GitHub - git • MySQL • SQLite • TFS • Vim • ffmpeg • Powershell • Bash / Shell scripting • Jenkins</p>
      <hr></hr>

      <div className="row">
        <div className="col-sm-6">
            <h2>Coursework</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Computer Science</th>
                        <th>Microbiology</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intro to Databases (SQL)</td>
                        <td>General Microbiology</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                        <td>Environmental Microbiology</td>
                    </tr>
                    <tr>
                        <td>Java Programming</td>
                        <td>Immunology</td>
                    </tr>
                    <tr>
                        <td>Computer Science I, II (C++)</td>
                        <td>Microbial Genetics</td>
                    </tr>
                    <tr>
                        <td>Computer Architecture (Assembly)</td>
                        <td>General Genetics</td>
                    </tr>
                    <tr>
                        <td>Android Development</td>
                        <td>Organic Chemistry I, II</td>
                    </tr>
                    <tr>
                        <td>Algorithm Design</td>
                        <td>Biochemistry</td>
                    </tr>
                    <tr>
                        <td>Linear Algebra</td>
                        <td>Physiology of Microorganisms</td>
                    </tr>
                    <tr>
                        <td>Theoretical Computer Science</td>
                        <td>Intro Org and Environ Biology</td>
                    </tr>
                    <tr>
                        <td>Calculus I, II</td>
                        <td>Intro Molec &amp; Cellular Biology</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6">

        </div>
      </div>


      </div>

        {/* Right column */}
        <div className="col-sm-2">

        </div>

    </div>
  );
}

export default App;
