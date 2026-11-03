import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../styles';
export default function Home() {
 return <View style={styles.container}>
  <Text style={styles.title}>Teknik Destek Paneli</Text>
  <Text style={styles.text}>Arıza takip uygulamasına hoş geldiniz.</Text>
  <Pressable style={styles.button} onPress={() => router.push('/ariza')}><Text style={styles.buttonText}>Arıza Listesi</Text></Pressable>
  <Pressable style={styles.button} onPress={() => router.push('/yeni-ariza')}><Text style={styles.buttonText}>Yeni Arıza</Text></Pressable>
 </View>;
}
