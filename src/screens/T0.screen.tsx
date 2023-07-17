import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TabButton} from '../components/TabButton';
import {AboutTab, ContactTab, SlowPostsTab} from '../components/Tabs';

// Updating the current tab without a transition
export default function T0() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    <>
      <View style={styles.tabButtonContainer}>
        <TabButton
          isActive={tab === 'about'}
          onPress={() => selectTab('about')}
          label={'about'}
        />
        <TabButton
          isActive={tab === 'posts'}
          onPress={() => selectTab('posts')}
          label={'posts (slow)'}
        />
        <TabButton
          isActive={tab === 'contact'}
          onPress={() => selectTab('contact')}
          label={'contact'}
        />
      </View>
      <View style={styles.divider} />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <SlowPostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}

const styles = StyleSheet.create({
  tabButtonContainer: {
    flexDirection: 'row',
    height: 40,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
