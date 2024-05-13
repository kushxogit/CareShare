import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LogInPage from "./Pages/Auth/log-in";
import LandingPage from "./Pages/LandingPage/landing-page";
import SignUpPage from "./Pages/Auth/sign-up";
import Feed from "./Pages/Feed/feed";
import Add from "./Pages/Donation/add";
import { Spinner } from "@ui-kitten/components";
import Profile from "./Pages/Profile/profile";
import PrimaryButton from "./Components/Buttons/button.component";
import ButtonText from "./Components/Buttons/button-text.component";
import TextButton from "./Components/Buttons/secondary-button.component";
import { useAuth } from "./Contexts/authContext";
import RequestForm from "./Pages/Donation/request";
import Engagement from "./Pages/Engagement/Engagement";
import { DonationsProvider } from "./Contexts/acceptedDonationContext";
import { Ionicons } from "react-native-vector-icons";
import DonationDetail from "./Pages/Feed/donation_feed";
import FaqPage from "./Pages/FAQ/faq";
import SignUpSuccess from "./Pages/Auth/onboarding";

interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthStack = createStackNavigator();
const AddStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown:
          navigation.getState().routes.length > 1 ||
          route.name === "DonationDetail",
        headerTitle: "Donation Details",
      })}
    >
      <FeedStack.Screen name="Feed Page" component={Feed} />
      <FeedStack.Screen name="DonationDetail" component={DonationDetail} />
    </FeedStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#FAAE2B",
        },
        headerTitle: "",
        headerBackTitle: "",
      }}
    >
      <AuthStack.Screen name="LandingPage" component={LandingPage} />
      <AuthStack.Screen name="LogIn" component={LogInPage} />
      <AuthStack.Screen name="SignUp" component={SignUpPage} />
      <AuthStack.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </AuthStack.Navigator>
  );
}

function AddStackScreen() {
  return (
    <AddStack.Navigator screenOptions={{ headerShown: true, headerTitle: "" }}>
      <AddStack.Screen name="AddRequest" component={Add} />
      <AddStack.Screen name="Request" component={RequestForm} />
    </AddStack.Navigator>
  );
}

function AppNavigator({ setIsUserLoggedIn }) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchRole = async () => {
      const storedRole = await AsyncStorage.getItem("role");
      setRole(storedRole);
    };

    fetchRole();
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Feed") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Engagement") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Faq") {
              iconName = focused ? "help-circle" : "help-circle-outline"; // Add this line for FAQ icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#FAAE2B",
          },
          headerRight: () => (
            <TextButton
              onPress={async () => {
                await AsyncStorage.removeItem("token");
                setIsUserLoggedIn(false);
              }}
            >
              <ButtonText>Logout</ButtonText>
            </TextButton>
          ),
          headerTitle: "CareShare",
        })}
      >
        <Tab.Screen name="Feed" component={FeedStackScreen} />
        {role !== "Volunteer" && (
          <Tab.Screen name="Engagement" component={Engagement} />
        )}
        {role !== "Volunteer" && (
          <Tab.Screen name="Add" component={AddStackScreen} />
        )}
        <Tab.Screen name="Faq" component={FaqPage} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
}

export default function Initial() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setIsUserLoggedIn(true);
      }
      setIsLoading(false);
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <DonationsProvider>
          {isUserLoggedIn ? (
            <AppNavigator setIsUserLoggedIn={setIsUserLoggedIn} />
          ) : (
            <AuthNavigator />
          )}
        </DonationsProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
