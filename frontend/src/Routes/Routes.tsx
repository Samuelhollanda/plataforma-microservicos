import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../Screens/Chat/Chat";
import Profile from "../Screens/Profile/Profile";
import Favourite from "../Screens/Favourite/Favourite";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function MyRoutes () {
    return (
        <Tab.Navigator
         screenOptions={() => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
         })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: () => (
                    <Feather name="search" size={24} color="black" /> 
                )
            }}
            />
            <Tab.Screen 
             name="Chat" 
             component={Chat} 
             options={{
                tabBarIcon: () => (
                    <Ionicons name="chatbox-ellipses" size={24} color="black" /> 
                )
            }}
             />
            <Tab.Screen 
             name="Favourite" 
             component={Favourite} 
             options={{
                tabBarIcon: () => (
                    <AntDesign name="heart" size={24} color="black" /> 
                )
            }}
             />
            <Tab.Screen 
             name="Profile" 
             component={Profile} 
             options={{
                tabBarIcon: () => (
                    <Ionicons name="people-sharp" size={24} color="black" />
                )
            }}
             />
        </Tab.Navigator>
    )
}

export default MyRoutes;