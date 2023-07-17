import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

export function AboutTab() {
  return <Text>Welcome to my profile!</Text>;
}

export const SlowPostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <View>{items}</View>;
});

function SlowPost({index}: {index: number}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 2) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <View key={index} style={styles.listItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.itemText}>Post #{index + 1}</Text>
    </View>
  );
}

export function ContactTab() {
  return (
    <View>
      <Text>You can find me online here:</Text>
      <Text>admin@mysite.com</Text>
      <Text>+123456789</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 1,
    flexDirection: 'row',
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
