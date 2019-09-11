import React from 'react';
import SlideBox from '../components/SlideBox';
import {Box, Image} from 'chakra-ui';

export default (imgSrc, alt) => () =>
  <SlideBox bg='black' color='#fff'>
    <Image src={imgSrc} alt={alt} maxWidth={920} />
  </SlideBox>;
