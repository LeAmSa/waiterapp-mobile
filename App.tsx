import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";

import { NativeBaseProvider, Box } from "native-base";
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
      {fontsLoaded ? <Main /> : <Loading />}
    </NativeBaseProvider>
  );
}
