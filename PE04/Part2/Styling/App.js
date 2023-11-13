import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { View, Image, Text, TouchableHighlight, StyleSheet, Platform } from 'react-native'; 

const userImage = require('./assets/user.png');

const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'Software Developer',
    description: 'A passionate developer creating mobile applications.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Jane Smith',
    occupation: 'UX Designer',
    description: 'An experienced UX designer with a focus on user-centered design.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Bob Johnson',
    occupation: 'Data Scientist',
    description: 'A data scientist exploring patterns and insights in big data.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Alice Brown',
    occupation: 'Frontend Developer',
    description: 'Passionate about creating beautiful and responsive web interfaces.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Chris Anderson',
    occupation: 'Marketing Specialist',
    description: 'Strategizing and executing marketing campaigns to drive business growth.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Eva Miller',
    occupation: 'Product Manager',
    description: 'Leading product development and innovation to meet user needs.',
    showThumbnail: true,
  },
]; // Add more profile data as needed

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const profileCards = this.state.data.map((item, index) => (
      <ProfileCard
        key={`card-${index}`}
        index={index}
        onPress={() => this.handleProfileCardPress(index)}
        {...item}
      />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.row}>{profileCards.slice(0, 2)}</View>
        <View style={styles.row}>{profileCards.slice(2, 4)}</View>
        <View style={styles.row}>{profileCards.slice(4, 6)}</View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45, // Add marginTop to give space above the first row
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowRadius: 3 
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold', 
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic', 
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  cardThumbnail: {
    transform: [{scale: 0.2}]
  },
});
