import React, {useState} from 'react';
import { TextInput, Button, StyleSheet, View} from 'react-native';

const GoalInput = props => {
    const[enteredGoal, setGoal] = useState('');
    const setGoalHandler = goal => {
        setGoal(goal);
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Goal" 
          style={styles.input} 
          onChangeText={setGoalHandler} 
          value={enteredGoal}
          />
        <Button title="ADD" onPress={() => props.addGoal(enteredGoal)}/>
        </View>
    );
};
const styles = StyleSheet.create({
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
    }
});
export default GoalInput;