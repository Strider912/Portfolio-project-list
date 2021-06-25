import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {

  return (

    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>  Call </LinkTitle>
          <LinkItem herf="tel:8580622367">8580622367</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>  Eamil </LinkTitle>
          <LinkItem herf="mailto:bhardwajaman1102@gmail.com"> bhardwajaman1102@gmail.com </LinkItem>
        </LinkColumn>
        </LinkList>

        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan> Innovating one project at a time </Slogan>
          </CompanyContainer>

        <SocialContainer>
       
        <SocialIcons href="https://github.com/Strider912" > 
       <AiFillGithub  size="3rem" />
       </SocialIcons>
       
       <SocialIcons href="https://linkedin.com/in/aman-bhardwaj-1a191aa1" > 
       <AiFillLinkedin size="3rem" />
       </SocialIcons>

       <SocialIcons href="https://instagram.com" > 
       <AiFillInstagram size="3rem" />
       </SocialIcons>

       </SocialContainer>
       
        </SocialIconsContainer>

    </FooterWrapper>

  );
};

export default Footer;
