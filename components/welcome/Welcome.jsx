import React,{ useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './welcome.style'
import { icons, SIZES } from '../../constants'

const artTypes = ["中国古代", "中国近现代", "西方古代", "西方近现代"];

const Welcome = () => {
  const navigation = useNavigation();
  const [activeArtType, setActiveArtType] = useState(artTypes[0]);

  return (
    <View>
      <View style={styles.container}>
        
        <Text style={styles.userName}>你好，Kaylee</Text>
        <Text style={styles.welcomeMessage}>与达芬奇面对面</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='蒙娜丽莎的微笑'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={artTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.tab(activeArtType, item)}
            onPress={() =>{
              setActiveArtType(item);
              navigation.navigate('SearchArtworks', { artType: item });  // 跳转到搜索结果页
            }}
            >
              <Text style={styles.tabText(activeArtType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => `${item}`} //  item => item ??? keyExtractor 用于为给定的 item 生成一个不重复的 key 
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
