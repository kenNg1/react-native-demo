import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useAppContext} from '../App.provider';
import {MoodItemRow} from '../components/MoodItemRow';

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
