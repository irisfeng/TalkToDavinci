// import React from 'react';
// import { View, SafeAreaView, ScrollView } from 'react-native';

// import { COLORS, icons, images, SIZES } from '../constants';
// import { Greatartists, Greatartworks, ScreenHeaderBtn, Welcome } from '../components';

// const Home = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//       <View 
//       style={{ flexDirection: 'row', justifyContent: 'space-between', padding: SIZES.padding }}
//       >
//         <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
//         <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
//       </View>
//       <ScrollView>
//         <Welcome />
//         <Greatartworks />
//         <Greatartists />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default Home;


import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import { COLORS, SIZES } from '../constants';
import { Greatartists, Greatartworks, Welcome } from '../components';


const Home = () => {

  const data = [
    { key: 'Welcome', component: <Welcome /> },
    { key: 'Greatartworks', component: <Greatartworks /> },
    { key: 'Greatartists', component: <Greatartists /> },
  ];

  return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: COLORS.lightWhite, 
      padding: SIZES.medium }}>
     <FlatList contentContainerStyle={{ padding: SIZES.medium }}
        data={data}
        renderItem={({ item }) => item.component}
      />
    </SafeAreaView>
  );
}

export default Home; 