import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
    
  const [enteredGoal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const setGoalHandler = goal => {
    setGoal(goal);
  }

  const addCourseGoal = () => {
    setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Goal" 
          style={styles.input} 
          onChangeText={setGoalHandler} 
          value={enteredGoal}
          />
        <Button title="ADD" onPress={addCourseGoal}/>
        </View>
        <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width:'80%', 
    borderColor:'black',
    borderWidth:1,
    padding: 10
  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth: 1
  }
});
