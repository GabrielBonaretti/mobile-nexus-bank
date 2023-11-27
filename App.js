// pages
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import SearchPay from "./src/pages/SearchPay";
import Receive from "./src/pages/Receive";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// zustend
import { useAuthStore } from "./src/store/authStore";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
import FinishPay from "./src/pages/FinishPay";

// App.jsx
import Toast, { SuccessToast, ErrorToast } from "react-native-toast-message";

const Stack = createStackNavigator();

const queryClient = new QueryClient();

const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      style={{
        borderLeftColor: "green",
        backgroundColor: "#202020",
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1NumberOfLines={4}
      text1Style={{
        fontSize: 15,
        color: "#FFF",
        width: 300,
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "red",
        backgroundColor: "#202020",
      }}
      text1NumberOfLines={4}
      text1Style={{
        fontSize: 15,
        color: "#FFF",
      }}
    />
  ),

  warn: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "#dbb22f",
        backgroundColor: "#202020",
      }}
      text1Style={{
        fontSize: 15,
        color: "#FFF",
      }}
    />
  ),
};

export default function App() {
  const auth = useAuthStore((state) => state.accessToken);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {!auth ? (
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="Signup"
                component={Register}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="SearchPay"
                component={SearchPay}
                options={{
                  headerShown: true,
                  gestureEnabled: false,
                  title: "Pay", 
                  headerStyle: {
                    backgroundColor: "#1a1e1c", // Set your desired background color
                  },
                  headerTintColor: "#dbb22f", // Set your desired text color
                  headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#FFF",
                  },
                  headerTitleAlign: "center",
                  headerShadowVisible: false, // Remove the shadow
                }}
              />
              <Stack.Screen
                name="FinishPay"
                component={FinishPay}
                options={{
                  headerShown: true,
                  gestureEnabled: false,
                  title: "Amount to pay",
                  headerStyle: {
                    backgroundColor: "#1a1e1c", // Set your desired background color
                  },
                  headerTintColor: "#dbb22f", // Set your desired text color
                  headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#FFF",
                  },
                  headerTitleAlign: "center",
                  headerShadowVisible: false, // Remove the shadow
                }}
              />
              <Stack.Screen
                name="Receive"
                component={Receive}
                options={{
                  headerShown: true,
                  gestureEnabled: false,
                  title: "Receive",
                  headerStyle: {
                    backgroundColor: "#1a1e1c", // Set your desired background color
                  },
                  headerTintColor: "#dbb22f", // Set your desired text color
                  headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#FFF",
                  },
                  headerTitleAlign: "center",
                  headerShadowVisible: false, // Remove the shadow
                }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </QueryClientProvider>
      <Toast config={toastConfig} />
    </>
  );
}
