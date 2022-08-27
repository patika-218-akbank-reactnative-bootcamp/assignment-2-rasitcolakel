[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8245216&assignment_repo_type=AssignmentRepo)

# Patika.dev and Akbank - React Native Bootcamp - 2022

# Assignment 2

## Table of Contents

- [Installing the **React Navigation** library](#installing-the-react-navigation-library)
  - [iOS configurations](#ios-configurations)
  - [Android configurations](#android-configurations)
  - [Modifying App.tsx file](#modifying-apptsx-file)
  - [Creating the stack navigator](#creating-the-stack-navigator)
    - [Navigator.tsx file](#navigatortsx-file)
- [Installing the **react-native-vector-icons** library](#installing-the-react-native-vector-icons-library)
  - [iOS configurations](#ios-configurations-1)
  - [Android configurations](#android-configurations-1)

## Installing the **React Navigation** library

It is a library that helps us to build a navigation system for React Native.

Installation

```bash
npm install @react-navigation/native
```

After the installation we need to install the pods for iOS.

## **iOS** configurations

```bash
npx pod-install ios
```

## **Android** configurations

Import the Bundle

```java
import android.os.Bundle;
```

And add the method below to the body of MainActivity class:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

### Modifying App.tsx file

```typescript
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './src/screens/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
```

## Creating the stack navigator

**@react-navigation/native** depends on react-native-screens and react-native-safe-area-context, so we need to install them, too.

```bash
npm install react-native-screens react-native-safe-area-context
```

Then we need to create a file named **Navigator.tsx** under the src/screens folder and add the following code:

## Navigator.tsx file

```typescript
import * as React from 'react';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
```

## Installing the **react-native-vector-icons** library

```bash
npm install --save react-native-vector-icons && @types/react-native-vector-icons
```

### **iOS** configurations

```plist
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Fontisto.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
</array>
```

### **Android** configurations

```java
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Preview Of The App
![Simulator Screen Recording - iPhone 13 - 2022-08-27 at 10 06 33](https://user-images.githubusercontent.com/53280610/187019277-b40c1a46-3548-4608-8651-2ebe17f015a9.gif)
