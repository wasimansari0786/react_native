import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './screen/Home';
import LoginLayout from './screen/LoginLayout';
import Signup from './screen/Signup';
import Forgotpass from "./screen/Forgotpass";
import OTP from "./screen/Otp";
import Profile from "./screen/Profile";
import Home from "./screen/Homepage";
import Homepage from "./screen/Homepage";
import EditProfile from "./screen/EditProfile";
import { Image } from "react-native";
import Settings from "./screen/Settings";
import Notifications from "./screen/Notifications";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator ();

const App = () => {

  return (

<NavigationContainer> 
<Stack.Navigator screenOptions={{
  headerStyle: {
    backgroundColor: 'black'
  }
}}>

<Stack.Screen name='Home' component={HomePage} options={{title:' '}}/>

  <Stack.Screen name='Login' component={LoginLayout} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />
<Stack.Screen name='Signup' component={Signup} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />

<Stack.Screen name='PasswordChange' component={Forgotpass} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />

<Stack.Screen name='OneTimePassword' component={OTP} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />

 <Stack.Screen name='profilePage' component={Profile} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />

<Stack.Screen name='Edit' component={EditProfile} options={
    {title:' ',
headerTintColor:'#3cb371',
}

} />


<Stack.Screen name='Homepage' options={
    {title:'',
headerTintColor:'#3cb371',
//headerShown: false
}}>
  {
    ()=>(
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} 
      options={
        {
        headerShown:false,
        tabBarActiveBackgroundColor:'black',
        tabBarInactiveBackgroundColor:'black',
        tabBarActiveTintColor:'#3cb371',
       tabBarIcon: ({focused}) => {

        const ImageHome = focused ? require('./screen/assets/Home2.png') : require('./screen/assets/home.png')
        
        return (

          <Image source={ImageHome}/>
        )
       }
  
        }

      } />
      <Tab.Screen name="Profile" component={Profile}
      options={
          {
            headerShown:false,
            tabBarActiveBackgroundColor:'black',
            tabBarInactiveBackgroundColor:'black',
            tabBarActiveTintColor:'#3cb371',
            tabBarIcon: ({focused}) => {

              const personImage = focused ? require('./screen/assets/person2.png') : require('./screen/assets/person.png')
              return (

                <Image source={personImage} />

              )

            }
          }

      } />
          {/* <Tab.Screen name='Logout' component={LoginLayout}
          options={
            {
              headerShown:false,
              tabBarActiveBackgroundColor:'black',
              tabBarInactiveBackgroundColor:'black',
              tabBarActiveTintColor:'#3cb371',
              tabBarStyle:{display:'none'},

              tabBarIcon : ({focused}) => {

                const LogoutImage = focused ? require('./screen/assets/logout2.png') : require('./screen/assets/logout.png')
                return(
                  <Image source={LogoutImage}/>
                )
              }
            }
          }

          /> */}
           <Tab.Screen name='Notification' component={Notifications}
          options={
            {
              headerShown:false,
              tabBarActiveBackgroundColor:'black',
              tabBarInactiveBackgroundColor:'black',
              tabBarActiveTintColor:'#3cb371',
              //tabBarStyle:{display:'none'},

              tabBarIcon : ({focused}) => {

                const LogoutImage = focused ? require('./screen/assets/notification2.png') : require('./screen/assets/notification.png')
                return(
                  <Image source={LogoutImage}/>
                )
              }
            }
          }

          />
           <Tab.Screen name='Settings' component={Settings}
          options={
            {
              headerShown:true,
              headerTitleAlign:'center',
              headerTintColor:'#3cb371',
              headerStyle: {
                backgroundColor:'black',

              },
              tabBarActiveBackgroundColor:'black',
              tabBarInactiveBackgroundColor:'black',
              tabBarActiveTintColor:'#3cb371',
              //tabBarStyle:{display:'none'},

              tabBarIcon : ({focused}) => {

                const SettingsImage = focused ? require('./screen/assets/settings2.png') : require('./screen/assets/settings.png')
                return(
                  <Image source={SettingsImage}/>
                )
              }
            }
          }

          />

    </Tab.Navigator>
    )
  }
  </Stack.Screen>

</Stack.Navigator>

</NavigationContainer>

   );
  };

  export default App