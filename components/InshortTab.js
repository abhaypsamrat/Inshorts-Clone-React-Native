import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import DiscoverScreen from '../Screen/DiscoverScreen';
import NewsScreen from '../Screen/NewsScreen';

const InshortTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);

  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'News'},
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default InshortTab;
