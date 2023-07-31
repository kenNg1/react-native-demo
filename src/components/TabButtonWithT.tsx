import React, {useTransition} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const TabButtonWithT: React.FC<{
  label: string;
  onPress: () => void;
  isActive: boolean;
}> = ({label, onPress, isActive}) => {
  const [isPending, startTransition] = useTransition();

  const handlePress = () => {
    // startTransition(() => {
    onPress();
    // });
  };

  if (isActive) {
    return (
      <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[styles.tabButton]} onPress={handlePress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});
