import { StyleSheet,StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store/store';


const Stack =createNativeStackNavigator();
export default function App() {

  return (
  
    <><StatusBar color='light'/>
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          title:'To Do List ',
          headerTintColor:'white',
         contentStyle:{backgroundColor: "#230919C7"},
         headerStyle:{backgroundColor: "#230919c7"},
                 }} >
          <Stack.Screen name='home'  component={HomeScreen} />
          <Stack.Screen  name='list'  component={ListScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    
    </>
    
    
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})
;
