import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%',height:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/1669_1677467272535718_7248961668915560225_n.jpg?_nc_cat=101&_nc_ht=scontent.fbfh3-1.fna&oh=70918c904664d9ba8200bba2fcbfa5de&oe=5C86737F"
              alt="avatar"
              className="avatar-img"
              style={{padding:'30px',borderRadius:'50%', width:'400px', height:'400px'}}
              
              />

            <div className="banner-text">
              <h1>Engenheria de Software</h1>

            <hr/>

          <p>HTML5/CSS3 | JavaScript | Java | C++ </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com/marianafelicio" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/marianafelicio" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="" rel="noopener noreferrer" target="_blank">
             <i class="fa fa-envelope" aria-hidden="true" />
          </a>

          {/* Download Curriculo */}
          <a href="/Curricullo-Mari.docx" download="Curriculo-mariana" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-download" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
