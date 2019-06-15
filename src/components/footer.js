import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList,FooterDropDownSection } from 'react-mdl';

class FooterE extends Component{
    render(){
        return(
            <Footer size="mega" style={{backgroundColor:'black',marginTop:'3px'}}>
            <FooterSection type="middle">
                <FooterDropDownSection title="Pessoal">
                    <FooterLinkList>
                        <a href="/resume">About</a>
                        <a href="/">Terms</a>
                        <a href="/">Partners</a>
                        <a href="/">Updates</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Detalhes">
                    <FooterLinkList>
                        <a href="/">Specs</a>
                        <a href="/">Tools</a>
                        <a href="/">Resources</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Tecnologias">
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
                        <a href="/contact">Contate Me</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            
                    
            
        </Footer>
        


        )
    }
}

export default FooterE;