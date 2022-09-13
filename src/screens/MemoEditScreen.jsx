import React from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert,
} from 'react-native';
// import KeyboardSafeView from '../components/KeyboadSafeView';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} enabled>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.inputBody} />
      </View>
      <CircleButton name="check" onPress={() => { Alert.alert('Pressed!'); }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体
    // backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  inputBody: {
    // backgroundColor: 'blue',
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
