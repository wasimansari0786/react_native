import {StyleSheet, Switch, Text, TouchableOpacity, View,} from 'react-native';
import React, {useState} from 'react';

const Cal = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };


  //functionality

  
  const calculate = title => {
    if (title == 'C') {
      setResult('');
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  };

  const Button = ({title, type}) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 7,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 60,
        width: 60,
        margin: 16,
      }}>
      <Text
        style={{
          fontSize: 37,
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getButtonColor(type),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getButtonColor = type => {
    if (type == 'top') {
      return '#ff8c00';
    } else if (type == 'right') {
      return '#EB6363';
    } else {
      return getColor(colors.dark, colors.light);
    }
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: getColor(colors.light, colors.dark),
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{true: colors.light2, false: colors.dark2}}
      />
      <Text
        style={{
          color: getColor(colors.dark, colors.light),
          fontSize: 40,
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop: 233,
          paddingBottom: 40,
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: getColor(colors.light1, colors.dark1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Button title="C" type="top" />
        <Button title="DL" type="top" />
        <Button title="/" type="top" />
        <Button title="%" type="top" />
        <Button title="7" type="number" />
        <Button title="8" type="number" />
        <Button title="9" type="number" />
        <Button title="*" type="right" />
        <Button title="4" type="number" />
        <Button title="5" type="number" />
        <Button title="6" type="number" />
        <Button title="-" type="right" />
        <Button title="1" type="number" />
        <Button title="2" type="number" />
        <Button title="3" type="number" />
        <Button title="+" type="right" />
        <Button title="00" type="number" />
        <Button title="0" type="number" />
        <Button title="." type="number" />
        <Button title="=" type="right" />
      </View>
    </View>
  );
};

export default Cal;

const styles = StyleSheet.create({});
