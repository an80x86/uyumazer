/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';
import CardSection from './src/ortak/CardSection';
import Button from './src/ortak/Button';
import Spinner from './src/ortak/Spinner';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC5m1QymHzKIeGK3pXdLQxn_bApd9XZ87M',
      authDomain: 'uyumazer-a02ed.firebaseapp.com',
      databaseURL: 'https://uyumazer-a02ed.firebaseio.com',
      projectId: 'uyumazer-a02ed',
      storageBucket: 'uyumazer-a02ed.appspot.com',
      messagingSenderId: '111209707620'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </CardSection>
      );
      case false:
        return (
          <LoginForm />
      );
      default:
       return (
         <View>
          <Spinner size="large" />
         </View>
       );

    }
  }


  render() {
    return (
      <View>
        <Header headerText="Giriş Ekranı" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
