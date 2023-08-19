
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {ColorScheme, toggleColorScheme} = useColorScheme('light')
  return (
    <View style={styles.container} className='dark:bg-slate-700 bg-slate-300'>
      <Switch value={ColorScheme === 'dark'} onChange={toggleColorScheme}/>
      <Text style = {styles.dummyText} className='dark:text-white text-xl'> Hello World!!</Text>
      <Text style={styles.dummyText} className='dark:text-white'>Laurent is so amazing</Text>
      <Button title='Cool'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding:16
  }
});
