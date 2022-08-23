[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8245216&assignment_repo_type=AssignmentRepo)

# Patika.dev and Akbank - React Native Bootcamp - 2022

# Assignment 2

## Installing the **React Navigation** library

It is a library that helps us to build a navigation system for React Native.

Installation

```bash
npm install @react-navigation/native
```

After the installation we need to install the pods for iOS.

**iOS**

```bash
npx pod-install ios
```

**Android**

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
