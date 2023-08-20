import { Box, Text, Image } from "native-base";
import logo from "../assets/TTA_logo_reduzida.png";

export default function Header() {
  return (
    <Box alignItems="center" justifyContent="center" width="100%" h="20" bg="#3589FF">
      <Image source={logo} alt="TemTubaAqui" size="xl" />
    </Box>
  );
}
