import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";

import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/theme";
import { Main } from "./src/components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
      />
      {fontsLoaded ? <Main /> : <Loading />}
    </NativeBaseProvider>
  );
}
