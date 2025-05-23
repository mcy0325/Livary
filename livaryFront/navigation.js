import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import colors from './constants/colors';

import HomeScreen from './src/HomeScreen';
import DrawerScreen from './src/DrawerScreen';
import DrawerListScreen from './src/DrawerListScreen';
import TimeScreen from './src/TimeScreen';
import ShareScreen from './src/ShareScreen';
import MypageScreen from './src/MypageScreen';

const Tab = createBottomTabNavigator();
const DrawerStack = createNativeStackNavigator();

function DrawerStackScreen() {
  return (
    <DrawerStack.Navigator screenOptions={{headerShown: false}}>
      <DrawerStack.Screen name="Drawer" component={DrawerScreen} />
      <DrawerStack.Screen name="DrawerList" component={DrawerListScreen} />
    </DrawerStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: `${colors.white}`,
          borderTopWidth: 0.5,
          borderColor: `${colors.gray200}`,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assets/images/icon1_navy.png')
                  : require('./assets/images/icon1_gray.png')
              }
              style={{width: 22, height: 24, marginTop: 36}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Drawer"
        component={DrawerStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assets/images/icon2_navy.png')
                  : require('./assets/images/icon2_gray.png')
              }
              style={{width: 25.55, height: 24, marginTop: 36}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Time"
        component={TimeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assets/images/icon3_navy.png')
                  : require('./assets/images/icon3_gray.png')
              }
              style={{width: 20.16, height: 24, marginTop: 36}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assets/images/icon4_navy.png')
                  : require('./assets/images/icon4_gray.png')
              }
              style={{width: 32, height: 24, marginTop: 36}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assets/images/icon5_navy.png')
                  : require('./assets/images/icon5_gray.png')
              }
              style={{width: 24, height: 24, marginTop: 36}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
