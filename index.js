import React, { Component, PropTypes } from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  Animated
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class NavBarScrollView extends Component {

  static propTypes = {
    
  };

  static defaultProps = {
    
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <NavigationBar 
          style={styles.header}
          scene={this.props.scene} 
          showHeader={this.state.showHeader}
          renderLeftItem={this.props.renderLeftItem}
          renderRightItem={this.props.renderRightItem}
        />
        <ScrollView 
          style={styles.container}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
        >
          {this.props.children}
        </ScrollView>
      </View>
    )
  }

}

module.exports = NavBarScrollView;
