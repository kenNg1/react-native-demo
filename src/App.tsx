import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './screens/BottomTabs.navigator';
import {AppProvider} from './App.provider';
import {Platform, UIManager} from 'react-native';

export const App: React.FC = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
