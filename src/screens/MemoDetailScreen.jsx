import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.memoBar}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2022年9月9日 10:00</Text>
      </View>
      <ScrollView>
        <Text style={styles.memoText}>
          買い物リスト
          本文やレイアウトの確認用です。
          使い方に気をつけて
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => navigation.navigate('MemoEdit')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoBar: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
});
