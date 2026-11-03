import { Text, View } from 'react-native';
export default function StatusBadge({ status }) {
  let color = '#f59e0b';
  if (status === 'İşlemde') color = '#3b82f6';
  if (status === 'Çözüldü') color = '#16a34a';
  return <View style={{ backgroundColor: color, padding: 7, borderRadius: 8, alignSelf: 'flex-start' }}><Text style={{ color: 'white', fontWeight: 'bold' }}>{status}</Text></View>;
}
