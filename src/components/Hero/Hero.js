import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
      Welcome to <br/> My Personel Portfolio 
      </SectionTitle>
      <SectionText>
      Enthusiastic front-end developer, skilled in React and Javascript. Seeking to deliver high-quality web
  development for clients. Contributed to 6 GitHub projects.
      </SectionText>
      <Button onClick={()=> window.loaction="https://google.com" } > Learn More </Button>
    
    </LeftSection>
  </Section>

);

export default Hero;