import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import StatusBadge from './StatusBadge';
import { styles } from '../styles';
export default function TicketCard({ ticket }) {
  return <Pressable onPress={() => router.push('/ariza/' + ticket.id)} style={styles.card}>
    <Text style={styles.name}>{ticket.title}</Text>
    <Text style={styles.text}>Konum: {ticket.location}</Text>
    <StatusBadge status={ticket.status} />
    <Text style={{ color: '#2563eb', marginTop: 10 }}>Detayları görüntüle</Text>
  </Pressable>;
}
