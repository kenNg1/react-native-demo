import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart, BarDatum} from '../components/BarChart';

export const Analytics: React.FC = () => {
  // TODO figure out scale of the chart

  const data: BarDatum[] = [
    {
      color: 'red',
      value: 10,
      label: 'A',
    },
    {
      color: 'blue',
      value: 75,
      label: 'B',
    },
    {
      color: 'green',
      value: 100,
      label: 'C',
    },
    {
      color: 'purple',
      value: 100,
      label: 'D',
    },
  ];

  return (
    <View style={styles.container}>
      <BarChart data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
