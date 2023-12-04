import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, Text, TouchableOpacity } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import { colors } from './src/theme';
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';
import Country from './src/Countries/Country';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CitiesStackScreen = ({ route, navigation }) => {
  const { cities, addLocation } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => addLocation(/* your location data here */)}
          style={{ marginRight: 16 }}
        >
          <Text>Add Location</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, addLocation]);

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen
        name="Cities"
        component={Cities}
        initialParams={{ cities, addLocation }}
      />
      <Stack.Screen
        name="City"
        component={City}
        initialParams={{ cities, addLocation }}
      />
    </Stack.Navigator>
  );
};

const CountriesStackScreen = ({ route, navigation }) => {
  const { countries, addValue } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => addValue(/* your value data here */)}
          style={{ marginRight: 16 }}
        >
          <Text>Add Value</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, addValue]);

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen
        name="Countries"
        component={Countries}
        initialParams={{ countries, addValue }}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        initialParams={{ countries, addValue }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => setCities((prevCities) => [...prevCities, city]);

  const addCountry = (country) => setCountries((prevCountries) => [...prevCountries, country]);

  const addLocation = (location, city) => {
    setCities((prevCities) => {
      const index = prevCities.findIndex((item) => item.id === city.id);
      const chosenCity = prevCities[index];
      chosenCity.locations.push(location);

      return [
        ...prevCities.slice(0, index),
        chosenCity,
        ...prevCities.slice(index + 1),
      ];
    });
  };

  const addValue = (value, country) => {
    setCountries((prevCountries) => {
      const index = prevCountries.findIndex((item) => item.id === country.id);
      const chosenCountry = prevCountries[index];
      chosenCountry.values.push(value);

      return [
        ...prevCountries.slice(0, index),
        chosenCountry,
        ...prevCountries.slice(index + 1),
      ];
    });
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="CitiesNav"
          initialParams={{ cities, addLocation }}
          component={CitiesStackScreen}
        />
        <Tab.Screen
          name="AddCity"
          initialParams={{ addCity }}
          component={AddCity}
        />
        <Tab.Screen
          name="CountriesNav"
          initialParams={{ countries, addValue }}
          component={CountriesStackScreen}
        />
        <Tab.Screen
          name="AddCountry"
          initialParams={{ addCountry }}
          component={AddCountry}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
