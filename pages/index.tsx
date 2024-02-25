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
           
            
          </Flex>
        </Container>
        
        
        ) : (
          <Container maxW="1200px" centerContent>
            <Heading color="white" fontSize="40px">
            Welcome to HASHMONEY!
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
                <b>HashMoney, Utility Token for HashSkribe! 
                <br />
                #MO, Digital Money Minted By The People, For The People!</b>{" "}
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
                    fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Use #MO to HashSkribe data/content directly to the Polygon Network or the Ethereum Classic Blockchain.{" "}
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
                      fontSize: "16px",
                    fontWeight: "bold",
                    flex: "2",
                    margin: "0 20px",
                  }}
                >
                    HashSkribe is not merely a platform for advocating free speech;
                    <br /> 
                    along with HashMoney, it is a lifeline for the next generation and their families, 
                    <br />
                    providing them with a digital currency immune to the ravages of inflation.
                    <br />
                    <br />
                </p>
            </Flex>
                
    <Flex alignItems="center" flexWrap="wrap">
  <p
    className={`${styles.description} ${styles.reduceSpace}`}
    style={{
      color: "white",
      wordWrap: "break-word",
        fontSize: "16px",
      fontWeight: "bold",
      flex: "1",
      margin: "0 20px",
    }}
  >
    Brace yourself to reshape the rules, and surpass the limitations forced upon civilization.
    <br />
    #MO symbolizes hope for a brighter future for the next generation. 
    <br />  
    Embark on a journey to redefine the concept of currency and restore its intrinsic value.
    <br />
    Join #MO in taking the first step towards making money great again.
    <br /><br />
    Follow these steps to obtain legendary status and level the playing field!
    <br /><br />
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


<Flex alignItems="center" flexWrap="wrap">
  <p
    className={`${styles.description} ${styles.reduceSpace}`}
    style={{
      color: "white",
      wordWrap: "break-word",
      fontSize: "16px", // Adjust font size here
      flex: "1",
      margin: "0 20px",
    }}
  >
    The #MO smart contract operates with the simplicity of the faucets of old, distributing HashMoney to those in need.
    <br />
    Families can access an initial sum of #MO digital currency with a simple interaction, followed by regular distributions every two weeks.
    <br />  
    While the supply is finite, it is substantial enough to sustain these individuals for years to come,
    <br />
    echoing the principles of a universal basic income.
    <br /><br />
    However, to fully realize this vision, we rely on the backing of crypto enthusiasts like you. 
    <br />
    Will you join us in taking the first step towards a more compassionate and equitable future?
    <br /><br />
      <strong>How can you help?</strong>
    <ul style={{ fontSize: "15px" }}>
      <li><strong>Spread Awareness:</strong> Share information about #MO across crypto communities, social media platforms, and relevant forums.
          <br />
          By increasing awareness, more people will become interested in the project, potentially leading to greater participation and adoption.</li>
        <br />
      <li><strong>Provide Liquidity:</strong> Participate in liquidity pools or exchanges where #MO is listed. 
          <br />
          By providing liquidity, you contribute to the stability and accessibility of the token, making it easier for families to exchange #MO for goods and services.</li>
        <br />
      <li><strong>Offer Technical Support:</strong> Offer your expertise in blockchain development, smart contract auditing, or other technical areas to the #MO team. 
          <br />
          By providing technical support, you can help ensure the security and functionality of the #MO platform, fostering trust among users.</li>
        <br />
      <li><strong>Engage in Community Building:</strong> Actively engage with the #MO community by participating in discussions, answering questions, and providing support to fellow members. 
          <br />
          By building a strong and supportive community, you create a positive environment where families feel comfortable and empowered to claim their #MO airdrops.</li>
        <br />
        <li><strong>Advocate for Adoption:</strong> Advocate for businesses, charities, and other organizations to accept #MO as a form of payment or donation. 
            <br />
            By expanding the use cases for #MO, you increase its utility and value, ultimately benefiting the families who rely on it for financial support.</li>
        <br />
        <br />
    </ul>
      <strong>Stand with us for #MO, a labour of love for our sons and daughters and the coming generation,
          <br />
          granting them an equitable path forward with a currency untouched by inflation and governmental manipulation,
          <br />
          securing a promising future.</strong>
  </p>
</Flex>




                
                
              
              <div className={styles.connect}></div>
  <div className={styles.grid}>
    <a
      href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xEddb551809Af5f6FE388288749cc89CB1bC5C495&chainId=137"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "16px" }}
      >
        BUY #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Now Available on Uniswap, Polygon Mainnet
      </p>
    </a>
  </div>

  <div className={styles.grid}>
    <a
      href="https://app.hebeswap.com/#/add/ETC/0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "16px" }}
      >
        BUY #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Now Available on Hebeswap, Ethereum Classic Mainnet
      </p>
    </a>
  </div>              


<div className={styles.grid}>
    <a
      href="https://thirdweb.com/polygon/0xEddb551809Af5f6FE388288749cc89CB1bC5C495/explorer"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "14px" }}
      >
       #MO Read/Write on Polygon
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Thirdweb: Another option for interacting with the HashMoney smart contract. Execute write/read functions: Claim Airdrop, Mint & more.
      </p>
    </a>
  </div>    




                
<div className={styles.grid}>
    <a
      href="https://thirdweb.com/ethereum-classic/0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d/explorer"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "14px" }}
      >
        #MO Read/Write on ETC
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        Thirdweb: Another option for interacting with the HashMoney smart contract. Execute write/read functions: Claim Airdrop, Mint & more.
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
        style={{ color: "white", fontSize: "16px" }}
      >
        Polygonscan #MO
      </h2>
      <p className={styles.paragraph} style={{ color: "white" }}>
        View the Contract Overview, execute functions, view tx and more.
      </p>
    </a>
  </div>

  <div className={styles.grid}>
    <a
      href="https://etc.blockscout.com/token/0xdf4c097533d9bf1d045cc333A9781c1962BF3F2d"
      className={`${styles.card} ${styles.sameSize}`}
      target="_blank"
    >
      <h2
        className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
        style={{ color: "white", fontSize: "16px" }}
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
        style={{ color: "white", fontSize: "16px" }}
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
        style={{ color: "white", fontSize: "16px" }}
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
        style={{ color: "white", fontSize: "16px" }}
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
          <Heading color="white" fontSize="30px">
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
                    style={{ color: "white", fontSize: "16px" }}
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
                    style={{ color: "white", fontSize: "16px" }}
                  >
                    Get Some $MATIC
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
                    style={{ color: "white", fontSize: "16px" }}
                  >
                    Go to Uniswap
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
                    style={{ color: "white", fontSize: "16px" }}
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
                    style={{ color: "white", fontSize: "16px" }}
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
              <Heading color="white" fontSize="16px"></Heading>
            </Flex>
          </div>
  
          <div>
  <Flex h="10vh" justifyContent="center" alignItems="center" mb={4}>
    <p
      style={{
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
        wordWrap: "break-word",
        maxWidth: "500px",
        textAlign: "center", // Align text to the center
      }}
    >
      #MO for peer-to-peer Payment!
      <br />
      #MO for Savings!
      <br />
      #MO for a Brighter Tomorrow for Families Around the Globe.
    </p>
  </Flex>
  <Flex h="10vh" justifyContent="center" alignItems="center" mb={4}>
    <p
      style={{
        color: "white",
        fontSize: "15px",
        wordWrap: "break-word",
        maxWidth: "500px",
        textAlign: "center", // Align text to the center
      }}
    >
      You can receive this coin through a completely free airdrop, 
      <br />
      with the only condition being that you possess Polygon Matic or
      <br />
      Ethereum Classic to cover their network gas fees.
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
        fontSize: "15px",
        wordWrap: "break-word",
        maxWidth: "500px",
        marginBottom: "20px", // Increase the margin bottom for larger spacing
      }}
    >
     HashMoney holds the key to the future, we eagerly await your arrival.
    </p>
    </Flex>
  </div>
  
  <div>
    <p
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
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
  
