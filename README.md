# CS624-PE01-Rashmitha
INPUT OUTPUT PROCESS MODEL
INPUT : Input is not required since we have actually wrapped the specific text content (Rashmitha, MSCS, and CityU of Seattle) within nested <text> which is a nested one. Also there is outer text in which uses the style and inner text is used to make text italic.Basically the content is predefined in the app.
PROCESS : The processing part includes a component that contains text elements styled according to the requirements of user.
OUTPUT : The output can be viewed on the screen of the mobile app where you it displays the name,degree program and school with the styling specified by user.

# CS624-PE02-RASHMITHA
INPUT OUTPUT MODEL FOR CORE COMPONENTS INPUT : The user launches the Core Components and then the app screen is displayed which has various user interface components. The user can perform the following actions in that app such as,user can enter a favorite course into the TextInput component. User can also view and scroll through a list of core, depth of study, and capstone courses displayed using the Text components. PROCESS :The CoreComponents component processes the data and displays it on the screen such as loads the icon.png image from the ./assets directory and displays it using the Image component and then it also handles user input in the TextInput component.Formats and displays the list of core, depth of study, and capstone courses using Text components. OUTPUT : The app display following things on the screen such as An image (icon.png) from the ./assets directory.A TextInput component for the user to enter their favorite course.A list of courses categorized as core, depth of study, and capstone, displayed using Text components.

# CS624-PE03-RASHMITHA
INPUT OUTPUT MODEL FOR TODOS : Input:
User interacts with the app's interface, which includes:
Typing a new to-do item into the input field.
Tapping the "Submit" button to add a to-do item.
Tapping the "Done" button to mark a to-do item as complete.
Tapping the "Delete" button to remove a to-do item.
Tapping the "All," "Active," or "Complete" tabs to filter the displayed to-do items.
Output:
The app displays a list of to-do items based on the selected filter (All, Active, or Complete).
When a new to-do item is added, it appears in the list of to-dos.
When the "Done" button is tapped, the app marks the to-do item as complete and updates its status.
When the "Delete" button is tapped, the app removes the to-do item from the list.
The app responds to user interactions by dynamically updating the list of to-do items based on the chosen filter.
To-do items can be added, marked as done, or deleted as a result of user interactions.
The input includes user actions and interactions with the app's interface, while the output describes how the app responds to those interactions, displaying and updating the list of to-do items accordingly.

# CS624-PE04-RASHMITHA
Input:
The data array (data) holds information about each profile, including image, name, occupation, description, and showThumbnail.
The handleProfileCardPress function handles the input when a profile card is pressed.
Process:
The render method in the App component processes the data by mapping over it and creating instances of the ProfileCard component for each profile.
The ProfileCard component processes the input data and handles the onPress event.
Output:
The ProfileCard component produces an output by rendering a styled card for each profile, including the profile image, name, occupation, and description.
The layout is organized into rows using the View and StyleSheet components.
The output is displayed on the screen when the React Native application is run.

# CS624-PE06-RASHMITHA
The React Native application follows an Input-Output-Process model, where user interactions serve as input. The user interacts with the app through UI components, triggering navigation actions and state changes. The React Navigation library manages the navigation flow, utilizing bottom tab and stack navigators for screen transitions. State is dynamically updated using the useState hook, with functions like addCity and addCountry. The UI components, such as TouchableOpacity and Text, form the output by rendering screens and allowing users to perform actions. Additionally, the application dynamically adjusts header options through navigation.setOptions. This model captures the essence of the app's functionality, emphasizing user interaction, navigation, and state management.








