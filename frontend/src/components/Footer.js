import React from 'react';
import { Box, Anchor } from 'grommet'

const Footer = () => (
  <Box as='footer' direction='column' align='center' background='dark-1' pad={{ vertical: 'xsmall' }} >
    <p>
      Created by <Anchor href='https://github.com/DevTeamSCH/' target='_blank'>DevTeam</Anchor> &copy; 2019
    </p>
  </Box>
);

export default Footer;
