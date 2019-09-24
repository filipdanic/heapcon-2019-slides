import React from 'react';
import SlideBox from '../components/SlideBox';
import { Box } from 'chakra-ui';

export default (title, asCode) => () =>
  <SlideBox bg='black' color='#fff'>
    <Box textAlign='center' as='h1' className={asCode ? 'code-title' : ''}>
      {title}
    </Box>
  </SlideBox>;
