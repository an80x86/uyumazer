import React from 'react';
import { Text, View } from 'react-native';
import { white } from 'ansi-colors';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white'
  },
  viewStyle: {
    backgroundColor: '#198EB9',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
  }

};

export default Header;
