import { useState } from 'react';
import { Box, Card, Heading, useToast } from "@chakra-ui/react";
import { useContract } from "@thirdweb-dev/react"; // Import only necessary hooks

export default function Airdrop() {
  const { contract } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
  const toast = useToast();
  const [showEventPopup, setShowEventPopup] = useState(false);

  const claimAirdrop = async () => {
    try {
      if (!contract) {
        throw new Error("Contract not initialized.");
      }

      // Call the claimAirdrop function on the contract
      await contract.call("claimAirdrop", []);
      setShowEventPopup(true);
    } catch (err) {
      console.error("Airdrop claim failed:", err);
      toast({
        title: "Error",
        description: "Failed to claim the airdrop. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Card p={5} mt={5} bg="#23253e">
        <Heading
          textAlign="center"
          bg="blue.500"
          bgGradient="linear(to-r, blue.900, blue.500)"
          borderRadius="md"
          p={1}
          fontSize="xl"
          color="white"
          onClick={claimAirdrop}
          cursor="pointer"
        >
          Claim #MO Airdrop
        </Heading>
      </Card>

      {showEventPopup && (
        <Card p={5} mt={5} bg="#23253e">
          <Heading
            textAlign="center"
            bg="green.500"
            bgGradient="linear(to-r, green.900, green.500)"
            borderRadius="md"
            p={1}
            fontSize="xl"
            color="white"
          >
            Airdrop Claimed!
          </Heading>
        </Card>
      )}
    </Box>
  );
}
