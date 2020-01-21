import React, {useState} from 'react';
import { TextInput, Button, StyleSheet, View, Modal} from 'react-native';

const GoalInput = props => {
    const[enteredGoal, setGoal] = useState('');
    const setGoalHandler = goal => {
        setGoal(goal);
    }

    const goalInputHandler = () => {
        props.addGoal(enteredGoal);
        setGoal('');
    };

    return (
        <Modal visible={props.visibility} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Goal" 
          style={styles.input} 
          onChangeText={setGoalHandler} 
          value={enteredGoal}
          />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="ADD" onPress={goalInputHandler}/>
        </View>
        <View style={styles.button}>
        <Button title="CANCEL" onPress={props.onCancel} color="red" />
        </View>
        </View>
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
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'60%',
    },
    button:{
        width:'40%',
    }
});
export default GoalInput;