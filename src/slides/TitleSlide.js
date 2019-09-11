import React from 'react';
import SlideBox from '../components/SlideBox';
import { Box } from 'chakra-ui';

export default (title) => () =>
  <SlideBox bg='black' color='#fff'>
    <Box textAlign='center' as='h1'>
      {title}
    </Box>
  </SlideBox>;
