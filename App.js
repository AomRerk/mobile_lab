import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require('./assets/IT_Logo.png')}
        />
        <Text style={{ fontSize: 26 }}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{ fontSize: 14 }}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>

      <View>
        <Button
          title="PROGRAMS"
        />
        <Button
          title="ABOUT US"
        />

      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  // button: {
  //   minWidth: 300,
  //   // flexDirection: 'column',
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   // justifyContent: 'flex-end',
  //   // width: '',
  // }


});
