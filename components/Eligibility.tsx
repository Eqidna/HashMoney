import { useState } from "react";
import { Box, Card, Heading, SimpleGrid, Stack, Button } from "@chakra-ui/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function AirdropEligibilityChecker() {
  const [walletAddress, setWalletAddress] = useState("");
  const { contract } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
  const eligibilityRead = useContractRead(contract, "isEligibleForAirdrop", [walletAddress]);
  const { data: eligibilityResult, isLoading } = eligibilityRead;

  const handleCheckEligibility = async () => {
    try {
      const result = await eligibilityRead.data();
      console.log("Is Eligible:", result);
    } catch (error) {
      console.error("Error checking eligibility:", error);
    }
  };

  return (
    <Card p={5} mt={5} bg="#23253e">
      <Heading
        textAlign="center"
        bgGradient="linear(to-r, blue.900, blue.500)"
        borderRadius="md"
        p={1}
        fontSize="xl"
        color="white"
      >
        Check Airdrop Eligibility
      </Heading>
      <SimpleGrid columns={1} width="275px" mx="auto">
        <Card p={2} m={2} bgGradient="linear(to-r, blue.900, blue.500)" borderRadius="md">
          <Box textAlign="center" mb={1}>
            {/* Render any additional content here */}
          </Box>
          <Stack spacing={5}>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter wallet address"
            />
            <Button colorScheme="gray" onClick={handleCheckEligibility} size="m">
              Check Eligibility
            </Button>
            {isLoading && <div style={{ color: "white" }}>Loading...</div>}
          </Stack>
        </Card>
      </SimpleGrid>
    </Card>
  );
}

