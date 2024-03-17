// Import necessary modules
import { useState } from 'react';
import { Box, Card, Heading, SimpleGrid, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useToast } from "@chakra-ui/react";
import { Web3Button, useContract } from "@thirdweb-dev/react";

// Custom Web3ButtonWrapper component
const Web3ButtonWrapper = ({ contractAddress, onClick, children }: { contractAddress: string; onClick: () => Promise<void>; children: React.ReactNode }) => (
  <Web3Button contractAddress={contractAddress} action={onClick}>
    {children}
  </Web3Button>
);

export default function Airdrop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showEventPopup, setShowEventPopup] = useState(false);
  const { contract, isLoading } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495"); // Update with the correct contract address
  const toast = useToast();

  const handleMint = async () => {
    if (!contract || isLoading) return; // Check if contract is undefined or loading

    try {
      const result = await contract.call("mint", []); // Update function name if necessary
      console.log(result); // Log the result for debugging
      setShowEventPopup(true);
      onOpen();
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast({
        title: "Mint Failed",
        description: (error as Error)?.message || "An error occurred while Minting new tokens. Please try again.",
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
          onClick={handleMint}
          cursor="pointer"
        >
          Mint HashMoney
        </Heading>
        <SimpleGrid columns={1} width="275px" mx="auto">
          <Card p={2} m={2} bg="blue.500" bgGradient="linear(to-r, blue.900, blue.500)" borderRadius="md">
            <Box textAlign="center" mb={1}>
              {/* Render any additional content here */}
            </Box>
            <SimpleGrid columns={1} spacing={5}>
              <Stack spacing={5}>
                <Web3ButtonWrapper contractAddress="0xEddb551809Af5f6FE388288749cc89CB1bC5C495" onClick={handleMint}>
                  Mint Your 1% #MO
                </Web3ButtonWrapper>
              </Stack>
            </SimpleGrid>
          </Card>
        </SimpleGrid>
      </Card>

      {/* Modal for success or error */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mint Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display success or error message here */}
            {showEventPopup ? (
              <Box color="green.500">#MO Minted successfully!</Box>
            ) : (
              <Box color="red.500">Mint failed. Please try again.</Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
