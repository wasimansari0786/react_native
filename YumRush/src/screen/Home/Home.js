import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {Images} from '../../utils/Images';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    // Hide the splash screen when the component is mounted
    SplashScreen.hide();
  }, [3000]);

  return (
    <View style={styles.background}>
      <View style={styles.splash_bg}>
        <Image source={Images.onboard_sc} style={styles.splash_image} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.splash_text_yum}>Yum</Text>
          <Text style={styles.splash_text_rush}>Rush</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          style={styles.button}>
          <Text style={styles.getstart}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
