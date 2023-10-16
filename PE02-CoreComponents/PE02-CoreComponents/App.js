import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet, Linking } from 'react-native';

const CoreComponents = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <TextInput placeholder="Which course did you like?" style={styles.input} />
      <Text style={styles.header}>Core Requirements(24 credits)</Text>
      {/* Display the 8 core courses */}
      <Text style={styles.course}>CS504 Software Engineering</Text>
      <Text style={styles.course}>CS506 Programming for Computing</Text>
      <Text style={styles.course}>CS519 Cloud Computing Overview</Text>
      <Text style={styles.course}>CS533 Computer Architecture</Text>
      <Text style={styles.course}>CS547 Secure Systems and Programs</Text>
      <Text style={styles.course}>CS622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>DS510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>DS620 Machine Learning & Deep Learning</Text>
      <Text style={styles.header}>Depth of Study(6 credits)</Text>
      {/* Display the 2 depth of study courses */}
      <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
      <Text style={styles.header}>Capstone Course</Text>
      {/* Display the 1 Capstone course */}
      <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  course: {
    fontSize: 16,
    marginTop: 5,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default CoreComponents;
