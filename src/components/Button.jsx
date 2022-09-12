import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const { children } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{children}</Text>
    </View>
  );
}

Button.propTypes = {
  children: 'string',
};

Button.defaultProps = {
  children: '',
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});
