import React from 'react';
import Home from "../Screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../Screens/Chat/Chat";
import Profile from "../Screens/Profile/Profile";
import Favourite from "../Screens/Favourite/Favourite";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "../Screens/Detail/Detail";
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackComponent() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

function MyTabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackComponent}
                options={{
                    tabBarIcon: () => <Feather name="search" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: () => <Ionicons name="chatbox-ellipses" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: () => <AntDesign name="heart" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => <Ionicons name="people-sharp" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

export default function AppRoutes() {
    return (
        <RootStack.Navigator 
            initialRouteName="Login" 
            screenOptions={{ headerShown: false }}
        >
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="MainTabs" component={MyTabRoutes} />
        </RootStack.Navigator>
    );
}