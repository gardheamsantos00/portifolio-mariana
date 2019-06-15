import React, { Component } from 'react';
import { Grid, Cell,Button } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{marginBottom:'20px'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Thiago Albertino Assis</h2>
            <img
              src="https://avatars2.githubusercontent.com/u/31054861?s=400&u=d717c90ed8eaed1180de7a55639c3a5a2e7bb127&v=4"
              alt="avatar"
              style={{height: '250px', marginLeft: '135px', borderRadius: 200}}
                />
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify'}}>
                Quer entrar em contato? É simples, preencha os campos a direita com seu endereço de 
                e-mail, seu nome completo e por último, a mensagem que quer me enviar. Prometo que
                responderei assim que possível.
              </p>

          </Cell>
          <Cell col={6}>
            <h2>Contato</h2>
            
            <div className="contact-list" >
               <form
                    action="https://formspree.io/thiago.1997@alunos.utfpr.edu.br"
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
                              <label htmlFor="name">Nome</label>
                              <input name="name" className="form-control" required />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
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
