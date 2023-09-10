import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { EmergencyButton } from './src/components/EmergencyButton';
import Header from "./src/components/Header";
import BarStatus from "./src/components/BarStatus";
import { AppRoutes } from "./src/routes/app.routes";

const theme = extendTheme({
  colors: {
    primary: "#3589FF", 
    background: "#FFFEED",
    card: "#FFFFFF"
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <BarStatus />
      <Header />
      <AppRoutes />
      <EmergencyButton />
    </NativeBaseProvider>
  );
}
