import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%',height:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars2.githubusercontent.com/u/31054861?s=400&u=d717c90ed8eaed1180de7a55639c3a5a2e7bb127&v=4"
              alt="avatar"
              className="avatar-img"
              style={{padding:'30px',borderRadius:'50%', width:'400px', height:'400px'}}
              
              />

            <div className="banner-text">
              <h1>Thiago Albertino Assis</h1>


          <p>22 anos, estudante de Análise e Desenvolvimento de Sistemas, na <a href="http://portal.utfpr.edu.br/" 
          target="_blank">UTFPR</a> Campus Cornélio Procópio e também desenvolvedor Front-End na empresa incubada CompileAgro.</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/thiago-albertino-assis-097693158/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/thiagoalbertino" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="" rel="noopener noreferrer" target="_blank">
             <i class="fa fa-envelope" aria-hidden="true" />
          </a>

          {/* Download Curriculo */}
          <a href="/CVThiagoAlbertino.docx" download="CVThiagoAlbertino.docx" rel="noopener noreferrer" target="_blank">
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
