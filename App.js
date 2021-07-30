import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={{
            backgroundColor: Colors.black,
            alignItems: 'center'
          }}>
          <Image style={ {     width: '100%',     height: 300,   }} source={require('./minhaimagem.png')} />
          <Text
            style={[
              styles.sectionTitle,
              {
                color: Colors.white,
              },
            ]}>
            hello world
          </Text>

          <Text
            style={[
              styles.sectionDescription,
              {
                color: Colors.white,
              },
            ]}>
            hello world 2
          </Text>
        </View>

        <View
          style={{
            backgroundColor: Colors.blue,
            alignItems: 'center'
          }}>
            <Image style = {styles.image} source={require('./minhaimagem.png')} />
          <Text
            style={[
              styles.sectionTitle,
              {
                color: Colors.white,
              },
            ]}>
            hello world
          </Text>

          <Text
            style={[
              styles.sectionDescription,
              {
                color: Colors.white,
              },
            ]}>
            hello world 2
          </Text>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  image: {
    width: 100,
    height: 100,
    alignContent: 'center'
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;