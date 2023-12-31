import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {MoodOptionType} from '../types';
import {theme} from '../theme';
const imageSrc = require('../../assets/butterflies.png');

const moodOptions: MoodOptionType[] = [
  {emoji: '🧑‍💻', description: 'studious'},
  {emoji: '🤔', description: 'pensive'},
  {emoji: '😊', description: 'happy'},
  {emoji: '🥳', description: 'celebratory'},
  {emoji: '😤', description: 'frustrated'},
];

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({onSelect}) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();

  const [hasSelected, setHasSelected] = React.useState(false);

  const handleSelect = React.useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [onSelect, selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imageSrc} style={styles.image} />
        <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable onPress={handleSelect}>
        <Text style={styles.fakeButton}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeButton: {
    textAlign: 'center',
    color: theme.colorWhite,
    backgroundColor: theme.colorPurple,
    height: 25,
    marginHorizontal: 100,
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colorPurple,
    justifyContent: 'space-between',
    height: 230,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colorPurple,
  },
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: theme.colorWhite,
  },
  button: {
    backgroundColor: theme.colorPurple,
  },
});
