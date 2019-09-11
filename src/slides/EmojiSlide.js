import React from 'react';
import SlideBox from '../components/SlideBox';
import { Box } from 'chakra-ui';

export default (emoji) => () =>
  <SlideBox bg='black' color='#fff'>
    <Box textAlign='center' as='h1'>
      {emoji}
    </Box>
  </SlideBox>;
