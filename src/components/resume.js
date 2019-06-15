import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars2.githubusercontent.com/u/31054861?s=400&u=d717c90ed8eaed1180de7a55639c3a5a2e7bb127&v=4"
                alt="avatar"
                style={{height: '300px', borderRadius: 200}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Thiago Albertino Assis</h2>
            <h4 style={{color: 'grey'}}>Sobre</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{textAlign: 'justify'}}>
                Nascido e crescido na cidade de Praia Grande, São Paulo, Brasil em 1997. Desde criança sempre fui muito 
                interessado na área de tecnologia, mas meu primeiro contato com programação foi apenas em 2015, em uma 
                disciplina no curso de Engenharia Mecânica, e esse foi o motivo para eu trocar de curso e começar a fazer 
                Análise e Desenvolvimento de Sistemas.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Endereço</h5>
            <p>Cornélio Procópio, Paraná, Brasil</p>
            <p>Rua: Carlos Gomes</p>
            <h5>Telefone</h5>
            <p>(13) 9 99788 3843</p>
            <h5>Email</h5>
            <p>thiago.1997@alunos.utfpr.edu.br</p>
            <h5>Web</h5>
            <p><a href="https://thiagoalbertino.github.io/personal/" target="_blank">thiagoalbertino.github.io/personal/</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Formação</h2>


            <Education
              startYear={2016}
              endYear={2019}
              schoolName="Universidade Tecnológica Federal do Paraná (UTFPR)"
              schoolDescription="Análise e Desenvolvimento de Sistemas"
               />

            <Education
                 startYear={2015}
                 endYear={2015}
                 schoolName="Faculdade de Tecnologia do Estado de São Paulo (FATEC)"
                 schoolDescription="Análise e Desenvolvimento de Sistemas"
                  />

                <Education
                 startYear={2015}
                 endYear={2015}
                 schoolName="ESAMC Santos"
                 schoolDescription="Engenharia Mecânica"
                  />  

            <Education
                 startYear={2013}
                 endYear={2014}
                 schoolName="Serviço Nacional de Aprendizagem Industrial (SENAI)"
                 schoolDescription="Mecânica de Manutenção"
                  />
            <Education
                 startYear={2013}
                 endYear={2014}
                 schoolName="Wizard"
                 schoolDescription="Curso de Inglês"
                  /> 

              <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Escola Estadual Professora Magali Alonso"
                 schoolDescription="Ensino Médio"
                  />

                <Education
                 startYear={2007}
                 endYear={2008}
                 schoolName="Universidade Santa Cecília - Santos"
                 schoolDescription="Curso de Inglês"
                  />

            <hr style={{borderTop: '3px solid #e22947'}} />
            
            <h2>Experiência</h2>

            <Experience
              startYear={2013}
              endYear={2013}
              jobName="Jovem Aprendiz - Modec Serviços de Petróleo do Brasil Ltda"
              jobDescription="Elaboração de relatórios referentes à atividades realizadas no curso de Mecânica de Manutênção no SENAI Santos."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills 
                skill="HTML5"
                progress={60}
              />
              <Skills
                skill="JavaScript"
                progress={50}
                />
                <Skills
                  skill="Java"
                  progress={40}
                  />
                    <Skills
                      skill="React"
                      progress={40}
                      />
                      <Skills
                      skill="C++"
                      progress={60}
                      />
                      <Skills
                      skill="Inglês"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
