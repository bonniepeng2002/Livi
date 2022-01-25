<h1 align="center"> The Livi Development Journey 🏘 </h1><br>
<p align="center"> A summary of everyday's progress! (Jan 8 - Present) </p>
<hr>

## :books: Development Log:

### January 8:
- Initiated blank TypeScript Expo project
- Followed a [tutorial](https://www.youtube.com/watch?v=Hln37dE19bs&ab_channel=BenAwad) to set up the basic navigation for the app
  - Created a stack navigation for the `login` and `register` screens
  - Launch this stack on app loaded
  - Created a basic authorization provider to know which user is logged in to use on every screen
- Created a custom TypeScript functional component snippet

### January 16:
- Display loading screen while seeing if a user is logged in
  - if a user is logged in, stop loading and display the main app
  - is a user does not exist, stop loading and display login/register screen
- Added bottom tab navigation screens
- Created custom header for bottom tab screens
- Created a navigation stack for the home tab, showing the feed and then listing details

### January 24:
- Created a stack navigation for messages screen, removed stack navigator for home feed.
- Process for creating a Stack Navigator in TS:
  - Create file for the stack navigator
    - create a stack navigator object
    - create a functional component that returns the stack navigator, with the necessary stack screens nested inside
    - this file contains the "directions" for the stack - ie. what component to render for each screen
  - Create a file for the types, for each screen in the stack
    - define a new type, a ParamList, that indicates that each screen's type is undefined
    - then, since we need the navigation prop in each screen, create a NavProp type that can be customized with the name of the screen
    - this is your types file, so you always have the navigation prop in your screen and you always have the screen name correct
  - Create your screens to render
  - Return the Stack Navigator in a parent file

## 🧠 Everything I'm Learning:
- React Native
  - useContext
  - Auth Providers
  - Async Storage
- React Navigation
  - Stack Navigation (navigators and screens, customization)
  - Bottom Tab Navigation
  - Headers
  - Routes
- Expo
  - Running an Expo app
  - Expo vectors
- TypeScript
