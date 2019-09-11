import React, { Component } from 'react';
import EmojiSlide from './slides/EmojiSlide';
import TitleSlide from './slides/TitleSlide';
import ImageSlide from './slides/ImageSlide';
import assets from './slides/assets';

const slides = [
  TitleSlide('Reinvent the Web'),
  EmojiSlide('🌎 🌍 🌏'),
  TitleSlide('Cyberspaces'),
  TitleSlide('Closed and Controlled'),
  ImageSlide(assets.SlackDown),
  ImageSlide(assets.Dropbox),
  ImageSlide(assets.Etsy),
  ImageSlide(assets.InstagramFunny),
  ImageSlide(assets.PhilipsHue)
];

class App extends Component {
  state = { slide: 0 };

  componentDidMount = () => {
    document.addEventListener('keydown', (e) => {
      this.processKeyCode(e.keyCode);
    });
  };

  processKeyCode = (keyCode) => {
    switch (keyCode) {
      case 37:
        return this.setState({
          slide: this.state.slide > 0 ? this.state.slide - 1 : 0
        });
      case 39:
        return this.setState({
          slide: this.state.slide === slides.length ? 0 : this.state.slide + 1
        });
    }
  };

  render() {
    const Comp = slides[this.state.slide] || slides[0];
    return <Comp />;
  }
}
export default App;
