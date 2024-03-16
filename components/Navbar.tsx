import { Container, Flex, Heading } from "@chakra-ui/react";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  embeddedWallet,
  trustWallet,
  zerionWallet,
  rainbowWallet,
  phantomWallet,
  darkTheme,
} from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <Container maxW={"1000px"} py={1} centerContent>
      <Flex direction="row" justifyContent="space-between" align="center">
      <ConnectWallet
        theme={darkTheme({
          colors: {
            accentText: "#10508d",
            accentButtonBg: "#10508d",
            modalBg: "#161b2c",
            dropdownBg: "#161b2c",
            borderColor: "#0098f1",
            separatorLine: "#ffffff",
            primaryButtonBg: "#0099f3",
            primaryButtonText: "#ffffff",
            secondaryButtonBg: "#0f5393",
            secondaryButtonHoverBg: "#0976c3",
            connectedButtonBg: "#10528f",
            connectedButtonBgHover: "#0582d3",
            walletSelectorButtonHoverBg:
              "#161b2c",
          },
        })}
        modalSize={"wide"}
        welcomeScreen={{
          img: {
            src: "https://hash-money.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogopit_16902006371871.0d3f5079.png&w=640&q=75",
            width: 200,
            height: 200,
          },
        }}
      />
      </Flex>
    </Container>
  );
}
