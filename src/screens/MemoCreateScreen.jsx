import React from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';
// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.inputBody} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  inputBody: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
