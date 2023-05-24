import React, { useState } from 'react'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './greatartworks.style'
import { COLORS, SIZES } from '../../constants'
import ArtworkCard from '../common/cards/ArtworkCard';

const artImages = [
  { id: '1', uri: require('../../assets/images/artworks/Mona_Lisa.jpg') },
  { id: '2', uri: require('../../assets/images/artworks/shuixiangtu.jpg') },
  { id: '3', uri: require('../../assets/images/artworks/StarNight.jpg') },
  { id: '4', uri: require('../../assets/images/artworks/Picasso_The_Weeping_Woman.jpg') },
  { id: '5', uri: require('../../assets/images/artworks/Sunflower.jpg') },
  { id: '6', uri: require('../../assets/images/artworks/zdq_lianou.jpg') },
  // More images...
];

const Greatartworks = () => {
  const navigation = useNavigation();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>著名画作</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Error occurred</Text>
          ) : (
            <FlatList
                data={artImages}
                renderItem={({ item }) => (
                  <ArtworkCard 
                    item={item}
                    onPress={() => navigation.navigate('ArtworkDetails', { artworkId: item.id })}
                  />
                )}
              keyExtractor={item => item.id} // Generate a unique key for each item
              contentContainerStyle={{columnGap: SIZES.large}}
              horizontal
            />
          )
        }
      
      </View>
    </View>
  )
}
export default Greatartworks;
