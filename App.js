import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setMode] = useState(false);

  const addCourseGoal = (goalTitle) => {
    setCourseGoals(
      courseGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle}]
    );
    setMode(false);
  };

  const deleteGoal = (goalId) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setMode(false);
  };

  return (
    <View style={styles.screen}>
        <Button  title="Add New Goal" onPress={() => setMode(true)}/>
        <GoalInput 
          visibility={isAddMode} 
          addGoal={addCourseGoal} 
          onCancel={cancelGoalHandler} />
        <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => 
          <GoalItem 
            title = {itemData.item.value} 
            onDelete={deleteGoal} 
            id={itemData.item.id} 
          />
          } 
        />
        </View>        
    </View>
  );
}


const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
});
