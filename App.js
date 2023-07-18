import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} />
        <Text style={{ fontSize: 26 }}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{ fontSize: 14 }}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>

      </View>
      <View style={styles.button}>
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
    // justifyContent: 'flex-end',
  },
  button: {
    width: 500,
    // flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // width: '',
  }


});
