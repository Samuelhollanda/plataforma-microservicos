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
import LoginScreen from "../Screens/Login/LoginScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator 
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

function MyRoutes() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                //headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
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