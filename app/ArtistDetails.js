// ArtistDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { getArtistInfo } from '../api/openai';

function ArtistDetails({ route }) {
  const [info, setInfo] = useState(null);
  const { artistName } = route.params;

  useEffect(() => {
    getArtistInfo(artistName)
      .then(info => setInfo(info))
      .catch(error => console.error('Error:', error));
  }, [artistName]);

  if (!info) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
}

export default ArtistDetails;
