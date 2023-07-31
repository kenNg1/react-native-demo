import React, {Suspense, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AboutTab, ContactTab, SlowPostsTab} from '../components/Tabs';
import {TabButtonWithT} from '../components/TabButtonWithT';

// Updating the parent component in a transition
// TabButtonWithT updates the parents component T2
export default function T3() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    // <Suspense
    //   fallback={
    //     <View>
    //       <Text>🌀 Loading...</Text>
    //     </View>
    //   }>
    <>
      <View style={styles.tabButtonContainer}>
        <TabButtonWithT
          isActive={tab === 'about'}
          onPress={() => selectTab('about')}
          label={'about'}
        />
        <TabButtonWithT
          isActive={tab === 'posts'}
          onPress={() => selectTab('posts')}
          label={'posts (with t)'}
        />
        <TabButtonWithT
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
    // </Suspense>
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
