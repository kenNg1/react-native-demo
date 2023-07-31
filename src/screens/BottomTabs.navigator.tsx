import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home.screen';
import {History} from './History.screen';
import {Analytics} from './Analytics.screen';
import {Text} from 'react-native';
import {HomeIcon} from '../components/icons';
import {theme} from '../theme';
import T0 from './T0.screen';
import T1 from './T1.screen';
import T2 from './T2.screen';
import T3 from './T3.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <Text>H</Text>;
          }

          if (route.name === 'Analytics') {
            return <Text>A</Text>;
          }

          if (route.name === 'T0') {
            return <Text>T0</Text>;
          }

          if (route.name === 'T1') {
            return <Text>T1</Text>;
          }

          if (route.name === 'T2') {
            return <Text>T2</Text>;
          }

          if (route.name === 'T3') {
            return <Text>T3</Text>;
          }

          if (route.name === 'Suspense') {
            return <Text>S</Text>;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{title: "Today's Mood"}}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{title: 'Past Moods'}}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{title: 'Fancy Charts'}}
      />
      <BottomTabs.Screen name="T0" component={T0} options={{title: 'T0'}} />
      <BottomTabs.Screen name="T1" component={T1} options={{title: 'T1'}} />
      <BottomTabs.Screen name="T2" component={T2} options={{title: 'T2'}} />
      <BottomTabs.Screen name="T3" component={T3} options={{title: 'T3'}} />
      <BottomTabs.Screen
        name="Suspense"
        component={Analytics}
        options={{title: 'Suspense'}}
      />
    </BottomTabs.Navigator>
  );
};
