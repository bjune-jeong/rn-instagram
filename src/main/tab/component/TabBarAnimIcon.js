import React, { Component } from 'react';
import { Image } from 'react-native';
import LottieView from 'lottie-react-native';

class TabBarAnimIcon extends Component {
  animation;
  
  render() {
    const { focused, iconAnim, icon, style } = this.props;

    if (focused) {
      this.animation?.reset();
      this.animation?.play();

      return (
        <LottieView ref={animation => {
            this.animation = animation;
          }}
          loop = {false}
          source={iconAnim}
          style={style}/>)
    } else {
      return (<Image source={icon} style={style}/>)
    }
  }
}

export default TabBarAnimIcon;