import React, { Component } from 'react';
import pgpKey from '../assets/mitchfen.asc'
import headShot from '../assets/headshot.jpg'

class About extends Component {
    
    state ={
        i: 0
    }
    
    render() {
      return (
        <>    
            <div className="row">
              <div className="col-sm-3">
                <img src={headShot} width="100%" alt="My cute face."/>
              </div>
              <div className="col-sm-9">
                <p>
                I'll be filling this site out more as I teach myself React and get better with JavaScript.

                I created my old site using just HTML and Bootstrap. You can view it here: <a href='https://mitchfen.xyz/static-site/'>mitchfen.xyz/static-site/</a>
                </p>

                <p>
                GitHub: <a href="https://github.com/mitchfen" rel="noopener noreferrer" target="_blank">mitchfen</a>
                <br></br>
                Email: <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
                <br></br>
                PGP Public key: <a href={pgpKey} rel="noopener noreferrer" target="_blank">4AF2 B4C0 9559 2000 &#8595;</a>
                <br></br>
                LinkedIn: <a href="https://www.linkedin.com/in/mitchfen/">mitchfen</a>
                <br></br>
                ORCID: <a href="https://orcid.org/0000-0002-9684-0447">0000-0002-9684-0447</a>
                <br></br>
                </p>
              </div>
            </div>
        </>
        );
    }
}

export default About;