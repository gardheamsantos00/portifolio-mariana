import React, { Component } from 'react';
import { Grid, Cell,Button } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{marginBottom:'20px'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mariana Felício</h2>
            <img
              src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/39923961_2201985730083867_7309093151543656448_n.jpg?_nc_cat=105&_nc_ht=scontent.fbfh3-1.fna&oh=e9ca009f8c9837dd1a4f4c56551b85fe&oe=5C4B5D1F"
              alt="avatar"
              style={{height: '250px', marginLeft: '135px'}}
                />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', }}>
             Nasci em 27 de outubro de 1989, na cidade de Nova Fatima Paraná.
              Moro em Nova Fatima, trabalho na empresa  Catuai Rótulos onde atuo como PPCP (Planejamento, Programação e Controle de Produção).
              Antes disso trabalhei por um periodo de um ano na Fabrica de Bolsas Positivo, onde era atendente, fazia vendas por telefone e emissão de notas fiscais.
              Cursei Administração na Unopar Virtual durante 1 ano, mas larguei por ter passado na UTF para cursar Analise de Sistema, onde fiquei durante um semestre, até que abriu o curso de Engenharia de Software, me inscrevi e passei, é o curso que estou fazendo atualmente e onde pretendo seguir carreira.
              </p>

          </Cell>
          <Cell col={6}>
            <h2>Contatos</h2>
            <hr/>
            <div className="contact-list" >
               <form
                    action="https://formspree.io/marifelicio_mf@hotmail.com"
                    method="POST"
                    className="row"
                      >
                        <div className="col-lg-8" style={{ margin: '0 auto' }}>
                          <div className="row">
                            <div className="form-group  col-md-6">
                              <label htmlFor="_replyto">Email</label>
                              <input
                                type="email"
                                name="_replyto"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="name">Name</label>
                              <input name="name" className="form-control" required />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                              className="form-control"
                              name="message"
                              rows="10"
                              required
                            />
                          </div>
                          <div className="text-right">
                            
                            <Button raised ripple type="submit"> Enviar </Button>
                          </div>
                        </div>
                  </form>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
