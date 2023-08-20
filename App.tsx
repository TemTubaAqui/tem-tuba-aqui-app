import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Header from "./src/components/Header";
import BarStatus from "./src/components/BarStatus";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <BarStatus />
      <Header />
      <Home/>
    </NativeBaseProvider>
  );
}
