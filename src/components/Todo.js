import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import Task from "./Task";

export default function Todo() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim().length > 0) {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => {
            console.log('Text input:', text); // Debugging statement
            setTask(text);
          }}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginTop: 8,
  },
  items: {
    marginTop: 20,
    flex: 1,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E8EAED",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: "black",
  },
});
