// pages
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import SearchPay from "./src/pages/SearchPay";
import Receive from "./src/pages/Receive";
import Cards from "./src/pages/Cards";
import Loan from "./src/pages/Loan";
import Profile from "./src/pages/Profile";
import Parcels from "./src/pages/Parcels";

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
import CardTransactions from "./src/pages/CardTransactions";

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
      text1NumberOfLines={4}
      text1Style={{
        fontSize: 15,
        color: "#FFF",
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

  options = {
    headerShown: true,
    gestureEnabled: false,
    title: "",
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
  };

  options_pay = { ...options };
  options_pay.title = "Pay";

  options_finish_pay = { ...options };
  options_finish_pay.title = "Amount to pay";

  options_receive = { ...options };
  options_receive.title = "Receive";

  options_cards = { ...options };
  options_cards.title = "Cards";

  options_cards_transactions = { ...options };
  options_cards_transactions.title = "Card transactions";

  options_parcels = { ...options };
  options_parcels.title = "Parcels";

  options_loan = { ...options };
  options_loan.title = "Loan";

  options_profile = { ...options };
  options_profile.title = "Profile";

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
                options={options_pay}
              />
              <Stack.Screen
                name="FinishPay"
                component={FinishPay}
                options={options_finish_pay}
              />
              <Stack.Screen
                name="Receive"
                component={Receive}
                options={options_receive}
              />

              <Stack.Screen
                name="Cards"
                component={Cards}
                options={options_cards}
              />

              <Stack.Screen
                name="CardTransaction"
                component={CardTransactions}
                options={options_cards_transactions}
              />

              <Stack.Screen
                name="Parcels"
                component={Parcels}
                options={options_parcels}
              />

              <Stack.Screen
                name="Loan"
                component={Loan}
                options={options_loan}
              />

              <Stack.Screen
                name="Profile"
                component={Profile}
                options={options_profile}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </QueryClientProvider>
      <Toast config={toastConfig} />
    </>
  );
}
