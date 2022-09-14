import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';

// import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignupScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="submit"
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList' }],
          })}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'LogIn' }],
            })}
          >
            <Text style={styles.footerLink}>Log in!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 48,
    fontSize: 16,
    // lineHeight: 32,
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    color: '#467FD3',
    fontSize: 14,
    lineHeight: 24,
  },
});
