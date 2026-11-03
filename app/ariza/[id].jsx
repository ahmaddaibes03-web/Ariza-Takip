import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { tickets } from '../../data/tickets';
import StatusBadge from '../../components/StatusBadge';
import { styles } from '../../styles';
export default function TicketDetail() {
 const { id } = useLocalSearchParams();
 const ticket = tickets.find(item => item.id === id);
 if (!ticket) return <View style={styles.container}><Text style={styles.title}>Arıza bulunamadı</Text><Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable></View>;
 return <View style={styles.container}>
  <Text style={styles.title}>{ticket.title}</Text>
  <Text style={styles.text}>Arıza ID: {ticket.id}</Text>
  <Text style={styles.text}>Konum: {ticket.location}</Text>
  <StatusBadge status={ticket.status} />
  <Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable>
 </View>;
}
