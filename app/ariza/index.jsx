import { View, Text, FlatList } from 'react-native';
import { tickets } from '../../data/tickets';
import TicketCard from '../../components/TicketCard';
import { styles } from '../../styles';
export default function TicketList() {
 return <View style={styles.container}>
   <Text style={styles.title}>Arıza Listesi</Text>
   <FlatList data={tickets} keyExtractor={item => item.id} renderItem={({ item }) => <TicketCard ticket={item} />} />
 </View>;
}
