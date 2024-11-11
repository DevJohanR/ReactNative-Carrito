import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Switch, Text, View } from 'react-native';
import { useColorScheme } from "nativewind" 
import ProductsList from './components/ProductsLists';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-gray-200 items-center justify-center dark:bg-black">
      <View className="flex-row w-full gap-5">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text className="dark:text-white text-2xl font-bold">New Collection</Text>
      </View>
      <StatusBar style={colorScheme === "dark"  ? "light" : "dark"} />
      <ProductsList/>
    </SafeAreaView>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
