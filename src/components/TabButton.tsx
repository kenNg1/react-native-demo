import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const TabButton: React.FC<{
  label: string;
  onPress: () => void;
  isActive: boolean;
}> = ({label, onPress, isActive}) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTab]}
      onPress={handlePress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#ddd',
  },
};
