import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';
// import AppBar from '../components/AppBar';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText, // キーとvalueが同じ
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          autoFocus
          style={styles.inputBody}
          onChangeText={(text) => { setBodyText(text); }}
        />
      </View>
      <CircleButton
        name="check"
        onPress={() => { handlePress(); }}
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
