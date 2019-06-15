import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://github.com/ThiagoAlbertino/PortifolioCompile/blob/master/feston.png?raw=true) center / cover'}} >Fest.On</CardTitle>
            <CardText>
              Este projeto foi desenvolvido por mim e mais um colega para as disciplinas de Programação Web e 
              Oficina de Integração, no curso de Análise e Desenvolvimento de Sistemas da UTFPR.
              
              Se trata de uma plataforma de venda de ingressos para eventos
              
            </CardText>
            <CardActions border>
              <Button href="https://github.com/FestOn-UTFPR/an34e-project" target="_black" colored>GitHub</Button>
              
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://github.com/ThiagoAlbertino/PortifolioCompile/blob/master/4l.png?raw=true) center / cover'}} >Projeto ForLogic</CardTitle>
            <CardText>
              Este foi um projeto que fiz para um processo seletivo da empresa ForLogic, esse projeto 
              consiste em uma plataforma onde os clientes da empresa possam dar feedbacks sobre os softwares 
              desenvolvidos para eles.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ThiagoAlbertino/4Dev-App" target="_blank" colored>GitHub</Button>
              
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/ThiagoAlbertino/PortifolioCompile/blob/master/port.png?raw=true) center / cover'}} >Portifolio</CardTitle>
            <CardText>
              Portifólio pessoal desenvolvido com HTML, CSS, JavaSript e Canvas
            </CardText>
            <CardActions border>
              <Button href="https://github.com/ThiagoAlbertino/ThiagoAlbertino.github.io/tree/master/personal" target="_blank" colored>GitHub</Button>
              
              <Button href="https://thiagoalbertino.github.io/personal/" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Projetos Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Projetos Vuejs</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Projetos Java</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>Java</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
