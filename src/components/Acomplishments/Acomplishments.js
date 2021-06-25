import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'GitHub Projects'},
  { number: 20, text: 'Github Followers', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (

  <Section>
    <SectionTitle> 
    Peronal Acomplishments 
    </SectionTitle>
    <Boxes>
    { data.map((card,index)=>(
      <Box key={index} > 
       <BoxNum> {card.number} </BoxNum> 
       <BoxText> {card.text} </BoxText> 
       </Box>
    ) ) }
    </Boxes>
  </Section>

);

export default Acomplishments;
