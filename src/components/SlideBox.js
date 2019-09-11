import React from 'react';
import { Flex } from 'chakra-ui';

export default ({ bg, color, children }) =>
  <Flex
    justifyContent='center'
    alignItems='center'
    minHeight='100%'
    bg={bg}
    color={color}
    p={4}
    style={{ boxSizing: 'border-box'}}
  >
    {children}
  </Flex>;
