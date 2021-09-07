import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";
import { SchoolCard } from "../screens/SchoolCard";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        }
      }}
    >
      <Screen
        name="SingIn"
        component={SingIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Carteirinha"
        component={SchoolCard}
      />
    </Navigator>
  )
}