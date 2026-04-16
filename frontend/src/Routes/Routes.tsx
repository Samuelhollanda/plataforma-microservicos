import { useNavigation, NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import Favourite from "../pages/Favourite/Favourite";

const Tab = createBottomTabNavigator();

function MyRoutes () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Favourite" component={Favourite} />
        </Tab.Navigator>
    )
}

export default MyRoutes;