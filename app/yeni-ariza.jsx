import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../styles';
export default function NewTicket() {
 const [title, setTitle] = useState('');
 const [location, setLocation] = useState('');
 return <View style={styles.container}>
  <Text style={styles.title}>Yeni Arıza</Text>
  <TextInput style={styles.input} placeholder="Arıza başlığı" value={title} onChangeText={setTitle} />
  <TextInput style={styles.input} placeholder="Konum" value={location} onChangeText={setLocation} />
  <Pressable style={styles.button} onPress={() => { if (!title.trim() || !location.trim()) { Alert.alert('Uyarı', 'Alanları doldurun'); return; } Alert.alert('Bilgi', 'Form bilgileri alındı. Bu örnekte kalıcı kayıt yapılmaz.'); }}><Text style={styles.buttonText}>Gönder</Text></Pressable>
  <Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable>
 </View>;
}
