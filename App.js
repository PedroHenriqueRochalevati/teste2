import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../teste/assets/instagram-logo.png";
import Pessoa from "../teste/assets/pessoa.webp";
import Pessoa2 from "../teste/assets/pessoa2.webp";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <Image source={Logo} style={{height: 60, width: 200}}/>
        <View style={styles.menuCaminhos}>
          <TouchableOpacity>
            <Feather name="heart" size={36} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="location-arrow" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 8}} horizontal style={{flexDirection: "row", gap: 16}}>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuCaminhos: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
