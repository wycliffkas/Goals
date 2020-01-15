import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    
  const [courseGoals, setCourseGoals] = useState([]);

  const addCourseGoal = (enteredGoal) => {
    setCourseGoals(
      courseGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}]
    );
  }

  return (
    <View style={styles.screen}>
        <GoalInput addGoal={addCourseGoal} />
        <View>
        <FlatList 
        data={courseGoals}
         renderItem={dataItem => 
         <GoalItem title = {dataItem.item.value}/>
         } />
        </View>        
    </View>
  );
}


const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
});
