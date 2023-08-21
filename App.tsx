import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { EmergencyButton } from './src/components/EmergencyButton';
import Header from "./src/components/Header";
import BarStatus from "./src/components/BarStatus";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <BarStatus />
      <Header />
      <AppRoutes />
      <EmergencyButton />
    </NativeBaseProvider>
  );
}
