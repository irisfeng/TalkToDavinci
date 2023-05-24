import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './artworkcard.style';

const ArtworkCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image 
                    source={item.uri} 
                    style={styles.image} 
                    resizeMode="cover" 
                />
            </View>
        </TouchableOpacity>
    );
}


export default ArtworkCard;