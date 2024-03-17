import { useState } from 'react';
import { Box, Card, Heading, SimpleGrid, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useToast } from "@chakra-ui/react";
import { Web3Button, useContract } from "@thirdweb-dev/react";

export default function Airdrop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showEventPopup, setShowEventPopup] = useState(false);
  const { contract, isLoading } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
  const toast = useToast();

  const handleClaimAirdrop = async () => {
    if (!contract || isLoading) return; // Check if contract is undefined or loading

    try {
      const result = await contract.call("claimAirdrop", []);
      console.log(result); // Log the result for debugging
      setShowEventPopup(true);
      onOpen();
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast({
        title: "Airdrop Claim Failed",
        description: error.message || "An error occurred while claiming the Airdrop. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Card p={5} mt={5} bg="#23253e">
        <Heading
          textAlign="center"
          bg="blue.500"
          bgGradient="linear(to-r, blue.900, blue.500)"
          borderRadius="md"
          p={1}
          fontSize="xl"
          color="white"
          onClick={handleClaimAirdrop}
          cursor="pointer"
        >
          Claim Airdrop
        </Heading>
        <SimpleGrid columns={1} width="275px" mx="auto">
          <Card p={2} m={2} bg="blue.500" bgGradient="linear(to-r, blue.900, blue.500)" borderRadius="md">
            <Box textAlign="center" mb={1}>
              {/* Render any additional content here */}
            </Box>
            <SimpleGrid columns={1} spacing={5}>
              <Stack spacing={5}>
                <Web3Button
                  contract={contract} // Pass the contract object directly
                  onClick={handleClaimAirdrop} // Use onClick instead of action
                >
                  Claim Your #MO
                </Web3Button>
              </Stack>
            </SimpleGrid>
          </Card>
        </SimpleGrid>
      </Card>

      {/* Modal for success or error */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Airdrop Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display success or error message here */}
            {showEventPopup ? (
              <Box color="green.500">Airdrop claimed successfully!</Box>
            ) : (
              <Box color="red.500">Airdrop claim failed. Please try again.</Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

    </Box>
  );
}
