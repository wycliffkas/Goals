import React, {useState} from 'react';
import { TextInput, Button, StyleSheet, View, Modal} from 'react-native';

const GoalInput = props => {
    const[enteredGoal, setGoal] = useState('');
    const setGoalHandler = goal => {
        setGoal(goal);
    }

    return (
        <Modal visible={props.visibility} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Goal" 
          style={styles.input} 
          onChangeText={setGoalHandler} 
          value={enteredGoal}
          />
        <Button title="ADD" onPress={() => props.addGoal(enteredGoal)}/>
        </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    input:{
    width:'80%', 
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    marginBottom: 10,
    }
});
export default GoalInput;