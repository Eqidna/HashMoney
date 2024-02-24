import React from 'react';
import { ConnectWallet, useAddress, ThirdwebProvider, useContract, useMetadata } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Heading, Flex, Box, Center } from "@chakra-ui/react";
import Airdrop from "../components/Airdrop";
import HashMoneyBalance from "../components/HashMoneyBalance";
import Mint from "../components/Mint";
import Image from "next/image";
import coinImage from "../assets/Logopit_16902006371871.png";
import supplyChartdata from "../assets/meta-chart (1).png"
import AirdropEligibilityChecker from "../components/Eligibility";

const contractAddress = "0xEddb551809Af5f6FE388288749cc89CB1bC5C495";


const Home: NextPage = () => {
    const address = useAddress();
    const { contract } = useContract(contractAddress);
    const { data, isLoading, error } = useMetadata(contract);
  
    return (
      <>
        {address ? (
          <Container maxW="500px">
          <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
            <Box>
              <HashMoneyBalance />
            </Box>
            <Box>
              <AirdropEligibilityChecker />
            </Box>
            <Box>
              <Airdrop />
            </Box>
            <Box>
              <Mint />
            </Box>
            <Box>
             
            </Box>
            
          </Flex>
        </Container>
        
        
        ) : (
          <Container maxW="1200px" centerContent>
            <Heading color="white" fontSize="40px">
            Welcome to HASH MONEY!
            </Heading>
  
            <Flex h="20vh" justifyContent="center" alignItems="center">
              <Heading color="white" fontSize="25px">
                Please connect your wallet to continue!
              </Heading>
            </Flex>
          </Container>
        )}
  
        <Container maxW="1200px">
          <div className={styles.container}>
            <main className={styles.main}>
              <h1 className={`${styles.title} ${styles.reduceSpace}`}>
                <b>HashMoney, Utility Token for HashSkribe!</b>{" "}
                  <b>#MO, Digital Money Minted By The People, For The People!</b>{" "}
                <a
                  href="https://polygonscan.com/address/0xEddb551809Af5f6FE388288749cc89CB1bC5C495"
                  className={styles.link}
                  target="_blank"
                >
                  <span
                    className={styles.description}
                    style={{
                      color: "WHITE",
                      fontSize: "35px",
                      fontWeight: "bold",
                    }}
                  ></span>
                </a>
              </h1>
              <p
                className={`${styles.description} ${styles.reduceSpace}`}
                style={{
                  color: "WHITE",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                }}
              >
                Use #MO to HashSkribe data/content directly to the Polygon Network or the Ethereum Classic Blockchain{" "}
              </p>
  
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={coinImage}
                  alt="HashMoney Image"
                  width={200} // Set the desired width of the image
                  height={200} // Set the desired height of the image
                />
              </div>
  
              <p
                className={`${styles.description} ${styles.reduceSpace}`}
                style={{
                  color: "white",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                  flex: "1",
                  margin: "0 20px",
                }}
              >
              
              </p>
             
              <Flex alignItems="center" flexWrap="wrap">
                
                <p
                  className={`${styles.description} ${styles.reduceSpace}`}
                  style={{
                    color: "white",
                    wordWrap: "break-word",
                    fontWeight: "bold",
                    flex: "2",
                    margin: "0 20px",
                  }}
                >
                 Hash Money, holds the key to the future, we eagerly await your arrival.
                </p>
               
                
                
              </Flex>
              <Flex alignItems="center" flexWrap="wrap">
                
                <p
    className={`${styles.description} ${styles.reduceSpace}`}
    style={{
      color: "white",
      wordWrap: "break-word",
      fontWeight: "bold",
      flex: "1",
      margin: "0 20px",
    }}
  >
    Brace yourself to reshape the rules, and surpass the limitations forced upon civilization.
    Mo symbolizes hope for a brighter future. Let's embark on a journey to redefine the concept of currency and restore its intrinsic value.
    Join #MO in taking the first step towards making money great again.
    <br /><br />
    Follow these steps to obtain legendary status and level the playing field!
    <ul>
      <li>Claim your #MO Airdrop.</li>
      <li>HODL your #MO.</li>
      <li>Mint your 1% HashMoney interest every 15 days.</li>
    </ul>
  </p>
  
                
                
                
                
              </Flex>
              
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={supplyChartdata}
                  alt="HashMoneychart"
                  width={500} // Set the desired width of the image
                  height={500} // Set the desired height of the image
                />
              </div>
              
              <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xEddb551809Af5f6FE388288749cc89CB1bC5C495&chainId=137"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        BUY #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Now Available on Uniswap, Polygon Mainnet
      </p>
    </a>
  </div>
                <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://app.hebeswap.com/#/add/ETC/0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        BUY #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Now Available on Hebeswap, Ethereum Classic Mainnet
      </p>
    </a>
  </div>
  
  <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://polygonscan.com/address/0xEddb551809Af5f6FE388288749cc89CB1bC5C495"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        Polygonscan #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        View the Contract Overview, execute functions, view tx and more.
      </p>
    </a>
  </div>

                <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://etc.blockscout.com/token/0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        Blockscout ETCscan #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        View the Contract Overview, execute functions, view tx and more.
      </p>
    </a>
  </div>
  
  <div className={styles.grid}>
    <a
      href="https://www.dextools.io/app/en/polygon/pair-explorer/0x143c2eaf1867ba30067ab3b0982cdb2c3130ce4b"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        Polygon DEXTOOLS #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Everything in one place.
      </p>
    </a>
  </div>

                <div className={styles.grid}>
    <a
      href="https://www.dextools.io/app/en/etc/pair-explorer/0x8f2f7cd7c76f31d9d59ba168f2e39fdc7fef6d1c?t=1708783930062"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        ETC DEXTOOLS #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Everything in one place.
      </p>
    </a>
  </div>
  
  <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://twitter.com/HashSkribeMoney"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        Follow HashMoney on Twitter
      </h2>
      <p className={`${styles.paragraph} ${styles.centered}`} style={{ color: "white" }}>
        Stay up to date on all things #MO.
      </p>
    </a>
  </div>
  
  
              <div className={styles.connect}></div>
              <div className={styles.grid}>
                <p
                  className={`${styles.description} ${styles.reduceSpace}`}
                  style={{ color: "white" }}
                ></p>
                
  
                <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>
              </div>
            </main>
          </div>
        </Container>
        <Container maxW="800px" centerContent>
          <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>
          <Heading color="white" fontSize="50px">
            How to buy
          </Heading>
  
          <div className={styles.grid}>
            <div className={styles.outerContainer}>
              
              <a
                href="https://metamask.io/"
                className={`${styles.card} ${styles.widerContainer}`}
                target="_blank"
              >
                <div className={styles.cardContent}>
                  <h2
                    className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Create a Wallet
                  </h2>
  
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    Download MetaMask or your wallet of choice from the app store
                    or Google Play Store for free. Desktop users can download the
                    Google Chrome extension by visiting metamask.io.
                  </p>
                </div>
              </a>
             
            </div>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.outerContainer}>
              
              <a
                href="https://portfolio.metamask.io/buy"
                className={`${styles.card} ${styles.widerContainer}`}
                target="_blank"
              >
                <div className={styles.cardContent}>
                  <h2
                    className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Get Some $MATIC/$ETC
                  </h2>
  
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    Have $MATIC/ETC in your wallet to switch to #MO. If you dont
                    have any $MATIC or $ETC, you can buy directly on metamask,
                    transfer from another wallet, or buy on another exchange and
                    send it to your wallet.
                  </p>
                </div>
              </a>
             
            </div>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.outerContainer}>
              
              <a
                href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xEddb551809Af5f6FE388288749cc89CB1bC5C495&chainId=137"
                className={`${styles.card} ${styles.widerContainer}`}
                target="_blank"
              >
                <div className={styles.cardContent}>
                  <h2
                    className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Go to Uniswap/HEBESwap
                  </h2>
  
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    Connect to Uniswap/HEBESWAP. Go to app.uniswap.org or app.hebeswap.com/#/swap in Google Chrome or
                    on the browser inside your Metamask or other wallet app. Connect your wallet.
                    Paste the #MO token address into Uniswap/HebeSwap, select #MO HashMoney,
                    and confirm. When Metamask prompts you for a wallet signature,
                    sign.
                  </p>
                </div>
              </a>
              
            </div>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.outerContainer}>
              
  
              <a
                href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xEddb551809Af5f6FE388288749cc89CB1bC5C495&chainId=137"
                className={`${styles.card} ${styles.widerContainer}`}
                target="_blank"
              >
                <div className={styles.cardContent}>
                  <h2
                    className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Switch $MATIC for #MO
                  </h2>
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    We have ZERO taxes so you dont need to worry about buying
                    with a specific slippage, although you may need to use
                    slippage during times of market volatility.
                  </p>
                </div>
              </a>
  
             </div>
          </div>

            <div className={styles.grid}>
            <div className={styles.outerContainer}>
              
  
              <a
                href="https://app.hebeswap.com/#/swap?inputCurrency=ETC&outputCurrency=0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d"
                className={`${styles.card} ${styles.widerContainer}`}
                target="_blank"
              >
                <div className={styles.cardContent}>
                  <h2
                    className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Switch $ETC for #MO
                  </h2>
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    We have ZERO taxes so you dont need to worry about buying
                    with a specific slippage, although you may need to use
                    slippage during times of market volatility.
                  </p>
                </div>
              </a>
  
              
            </div>
          </div>
  
  
          <div>
            <Flex h="10vh" justifyContent="center" alignItems="center">
              <Heading color="white" fontSize="20px"></Heading>
            </Flex>
          </div>
  
          <div>
    <Flex h="15vh" justifyContent="center" alignItems="center" mb={4}>
      <p
        style={{
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
          wordWrap: "break-word",
          maxWidth: "500px",
        }}
      >
        #MO, for payment! #Mo for a Better Tomorrow for Families Around the Globe.
      </p>
    </Flex>
    <Flex h="15vh" justifyContent="center" alignItems="center" mb={4}>
      <p
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          wordWrap: "break-word",
          maxWidth: "500px",
        }}
      >
        You can receive this coin through a completely free airdrop, with the only condition being that you possess Polygon Matic or 
          Ethereum Classic to cover the gas fees.
      </p>
    </Flex>
  </div>

  <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={supplyChartdata}
                  alt="HashMoneychart"
                  width={500} // Set the desired width of the image
                  height={500} // Set the desired height of the image
                />
              </div>
  
  <div>
  <Flex h="10vh" justifyContent="center" alignItems="center" mb={4}>
    <p
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        wordWrap: "break-word",
        maxWidth: "500px",
        marginBottom: "20px", // Increase the margin bottom for larger spacing
      }}
    >
     Hash Money, holds the key to the future, we eagerly await your arrival.
    </p>
    </Flex>
  </div>
  
  <div>
    <p
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        wordWrap: "break-word",
        maxWidth: "500px",
        marginBottom: "20px", // Increase the margin bottom for larger spacing
      }}
    >
      HASHSKRIBE IS COMING. STAY TUNED!
    </p>
    
  </div>
  
  
  
        </Container>
      </>
    );
  };
  
  export default Home;
  
