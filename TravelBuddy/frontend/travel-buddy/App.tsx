import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/components/HomePage";
import { AppState } from "./src/redux/store";
import {
  incrementCount,
  decrementCount,
} from "./src/redux/counter/CounterAction";

import { Provider, connect } from "react-redux";
import { Dispatch } from "redux";
import { store } from "./src/redux/store";

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

export default function App<AppProps, AppState>(props: AppState) {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomePage />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
