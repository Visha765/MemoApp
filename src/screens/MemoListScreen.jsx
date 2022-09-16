import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <MemoList />
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
