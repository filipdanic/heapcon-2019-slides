import React, { Component } from 'react';
import EmojiSlide from './slides/EmojiSlide';
import TitleSlide from './slides/TitleSlide';
import ImageSlide from './slides/ImageSlide';
import assets from './slides/assets';

const slides = [
  TitleSlide('Reinvent the Web'),
  TitleSlide('@DanicFilip'),
  EmojiSlide('🍽 🍻'),
  EmojiSlide('🌎 🌍 🌏'),
  ImageSlide(assets.Cables),
  TitleSlide('Middleman Problem'),
  ImageSlide(assets.InternetFreedomIndex),
  ImageSlide(assets.NetNeutrality),
  EmojiSlide('🔗 📑'),
  EmojiSlide('Facebook'),
  ImageSlide(assets.CAnalyticsPolitics),
  TitleSlide('The Assumption of Connectivity'),
  ImageSlide(assets.SlackDown),
  ImageSlide(assets.Dropbox),
  ImageSlide(assets.PhilipsHue),
  ImageSlide(assets.JIRA),
  TitleSlide('Offline-first Software'),
  TitleSlide('Peer-to-peer'),
  TitleSlide('Mesh Networks'),
  ImageSlide(assets.NYCMeshLogo),
  ImageSlide(assets.NYCMeshMap),
  TitleSlide('Offline-first & Data Ownership'),
  TitleSlide('Decentralized'),
  TitleSlide('Optional Internet Connectivity'),
  TitleSlide('Dat Protocol & Beaker Browser'),
  TitleSlide(
    <span>
      <span style={{ color: '#2aca4b' }}>dat://</span>
      <span style={{ color: '#63b3ed' }}>778f8d955192e4…cc6f643666fe639</span>
      <span style={{ color: '#d53f8c' }}>/readme.md</span>
    </span>,
    true),
  TitleSlide('Hyperswarm'),
  TitleSlide('Beaker'),
  ImageSlide(assets.Chirper),
  TitleSlide('Reinvent the Web'),
  TitleSlide('@DanicFilip / danicfilip.com')
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
