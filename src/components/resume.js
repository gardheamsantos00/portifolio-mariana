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
                src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/1982007_1379107012371747_980572919147501363_n.jpg?_nc_cat=100&_nc_ht=scontent.fbfh3-1.fna&oh=babe15516f30b8bd231b39ebce4b6667&oe=5C890687"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mariana Felício</h2>
            <h4 style={{color: 'grey'}}>Objetivo</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Desejo fazer parte do time da empresa oferecendo o melhor. Sou uma pessoa muito dedicada e comprometida com as atribuições que são dadas a mim. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Endereço</h5>
            <p>Avenida 14 de Dezembro, 758</p>
            <h5>Telefone</h5>
            <p>(43) 9 9904 4481</p>
            <h5>Email</h5>
            <p>marifelicio_mf@hotmail.com</p>
            <h5>Web</h5>
            <p>marifeliciof.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Formação</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Universidade Tecnológica Federal do Paraná"
              schoolDescription="Bacharelado em Engenharia de Software"
               />

            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Colégio Agricola Fernado Costa"
                 schoolDescription="Técnico Agricola"
                  />

            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Colégio Castro Alves"
                 schoolDescription="Técnico em Vendas"
                  />
            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Senai"
                 schoolDescription="Técnico em Manutenção Industrial"
                  />
            <hr style={{borderTop: '3px solid #e22947'}} />
            
            <h2>Experiência</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Auxiliar Administrativo"
              jobDescription="fabrica de bolsas positivo.
              Faturamento de notas fiscais e telefonista."
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="PPCP"
                jobDescription="CATUAI ROTULOS.
                Planejamento e controle de produção de toda a fábrica."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills 
                skill="html5"
                progress={50}
              />
              <Skills
                skill="javascript"
                progress={20}
                />
                <Skills
                  skill="Java"
                  progress={40}
                  />
                    <Skills
                      skill="React"
                      progress={10}
                      />
                      <Skills
                      skill="C++"
                      progress={30}
                      />
                      <Skills
                      skill="Inglês"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
