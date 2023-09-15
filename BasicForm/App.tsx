import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SideMenu from 'react-native-side-menu-updated';
import Form from './Screen/Form';
import EducationDetails from './Screen/EducationDetails';
import Work from './Screen/Work';
import {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Switch,
  Image,
  StyleSheet,
} from 'react-native';

function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = isDarkTheme ? DarkTheme : DefaultTheme;
  const [backgroundColor, setBackgroundcolor] = useState('#fff');
  const [textColor, setTextColor] = useState('black');

  const colorChange = () => {
    if (isDarkTheme === false) {
      setBackgroundcolor('');
      setTextColor('#fff');
    } else {
      setBackgroundcolor('#fff');
      setTextColor('black');
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    colorChange();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuContent = () => {
    const navigation = useNavigation();

    return (
      <View>
        <View style={{backgroundColor: 'black', paddingTop: 56}} />
        <View style={{backgroundColor: backgroundColor}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Form');
              toggleMenu();
            }}
            style={{flexDirection: 'row', marginTop: 7}}>
            <Image
              source={require('./assets/information.png')}
              style={styles.icon}
            />
            <Text
              style={{
                color: textColor,
                padding: 3,
                fontSize: 20,
                marginLeft: 20,
              }}>
              Informations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EducationDetails');
              toggleMenu();
            }}
            style={{flexDirection: 'row', marginTop: 7}}>
            <Image
              source={require('./assets/education.png')}
              style={styles.icon}
            />
            <Text
              style={{
                color: textColor,
                padding: 3,
                fontSize: 20,
                marginLeft: 20,
              }}>
              Education Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Work');
              toggleMenu();
            }}
            style={{flexDirection: 'row', marginTop: 7, paddingBottom: 7}}>
            <Image source={require('./assets/work.png')} style={styles.icon} />
            <Text
              style={{
                color: textColor,
                padding: 3,
                fontSize: 20,
                marginLeft: 20,
              }}>
              Work Details
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: backgroundColor,
            height: '100%',
          }}>
          <Image
            source={require('./assets/darkMode.png')}
            style={styles.icon}
          />
          <Text
            style={{
              padding: 3,
              fontSize: 20,
              color: textColor,
              marginLeft: 20,
            }}>
            Dark Mode
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDarkTheme ? '#8fbc8f' : '#f4f3f4'}
            onValueChange={toggleTheme}
            value={isDarkTheme}
            style={{marginBottom: 979, marginLeft: 50}}
          />
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer theme={theme}>
      <SideMenu menu={<MenuContent />} isOpen={isMenuOpen}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#8fbc8f',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}>
          <Stack.Screen
            name="Form"
            children={() => (
              <Form toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            )}
            options={{
              headerLeft: () => (
                <View>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Image source={require('./assets/menu.png')} />
                  </TouchableOpacity>
                </View>
              ),
              title: 'INFORMATIONS',
              headerStyle: {
                backgroundColor: 'black',
              },
            }}
          />
          <Stack.Screen
            name="EducationDettails"
            component={EducationDetails}
            options={{
              title: 'EDUCATION DETAILS',
              headerStyle: {
                backgroundColor: 'black',
              },
            }}
          />

          <Stack.Screen
            name="Work"
            component={Work}
            options={{
              title: 'WORK DETAILS',
              headerStyle: {
                backgroundColor: 'black',
              },
            }}
          />
        </Stack.Navigator>
      </SideMenu>
    </NavigationContainer>
  );
}

const App = () => {
  return <StackNavigation />;
};
export default App;

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
    marginLeft: 10,
  },
});
