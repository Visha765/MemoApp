import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'asc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('ERROR!');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => navigation.navigate('MemoCreate')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体
    backgroundColor: '#F0F4F8',
  },
});
