
import { ThirdwebProvider, phantomWallet, rainbowWallet, useContract, zerionWallet  } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import {
  walletConnect,
  ConnectWallet,
  coinbaseWallet,
  localWallet,
  magicLink,
  trustWallet,
  metamaskWallet,
  paperWallet,
  safeWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import {
  Polygon,
  Ethereum,
  Binance,
  Optimism,
  EthereumClassic,
  Dogechain,
  Arbitrum,
} from "@thirdweb-dev/chains";
import { Web3Button } from "@thirdweb-dev/react";
import "../styles/globals.css";
import React from "react";
import { Container, Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #23253e, #BED6FE, #23253e )",
      }}
      >
      < ThirdwebProvider
      activeChain="polygon"
      clientId="bc0102ed4e30c97c3b41ac8269fd9f11" // You can get a client id from dashboard settings
      supportedChains={[
        Polygon,
        Ethereum,
        Binance,
        Optimism,
        EthereumClassic,
        Arbitrum,
        Dogechain,
      ]}
      supportedWallets={[
          metamaskWallet(),
          walletConnect(),
          coinbaseWallet(),
          safeWallet(),
          localWallet(),
          trustWallet(),
          zerionWallet(),
          rainbowWallet(),
          phantomWallet(),
        ]}
     
    >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        
      </ChakraProvider>
    </ThirdwebProvider>
  </div>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
}



export default MyApp;
