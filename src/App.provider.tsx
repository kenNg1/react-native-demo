import React from 'react';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

// context will hold an object with these props/function type declarations
type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
};

// create the context with default values (object)
const AppContext = React.createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

// creates the provider based on the created context
export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  React.useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, {mood, timestamp: Date.now()}];
      setAppData({moods: newValue});
      return newValue;
    });
  }, []);

  const handleDeleteMood = React.useCallback(
    (mood: MoodOptionWithTimestamp) => {
      setMoodList(current => {
        const newValue = current.filter(
          item => item.timestamp !== mood.timestamp,
        );
        setAppData({moods: newValue});
        return newValue;
      });
    },
    [],
  );

  return (
    <AppContext.Provider value={{moodList, handleSelectMood, handleDeleteMood}}>
      {children}
    </AppContext.Provider>
  );
};

// exposes the context hook for better readability
export const useAppContext = () => React.useContext(AppContext);
