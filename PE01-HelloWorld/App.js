import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function  PE01() {
  return(
    <View style={styles.container}>
      <Text style={styles.italicText}>Rashmitha Mothe</Text>
      <Text style={styles.italicText}>MSCS</Text>
      <Text style={styles.italicText}>CityU of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent:  'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    marginbottom: 10,
  },
  italicText: {
    fontStyle: 'italic',
  },
});
