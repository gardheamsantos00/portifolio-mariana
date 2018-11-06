import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList,FooterDropDownSection } from 'react-mdl';

class FooterE extends Component{
    render(){
        return(
            <Footer size="mega" style={{backgroundColor:'black',marginTop:'3px'}}>
            <FooterSection type="middle">
                <FooterDropDownSection title="Pessoal">
                    <FooterLinkList>
                        <a href="/">About</a>
                        <a href="/">Terms</a>
                        <a href="/">Partners</a>
                        <a href="/">Updates</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Detailhes">
                    <FooterLinkList>
                        <a href="/">Specs</a>
                        <a href="/">Tools</a>
                        <a href="/">Resources</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technologias">
                    <FooterLinkList>
                        <a href="/">How it works</a>
                        <a href="/">Patterns</a>
                        <a href="/">Usage</a>
                        <a href="/">Products</a>
                        <a href="/">Contracts</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href="/">Sugestões</a>
                        <a href="/">Perguntas</a>
                        <a href="/">Contact Me</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                    <a href="/">Ajuda</a>
                    <a href="/" style={{marginLeft:"1050px"}}>Todos os direitos reservados ™</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        


        )
    }
}

export default FooterE;