import { useState } from 'react';
import { Box, Card, Heading, SimpleGrid, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useToast } from "@chakra-ui/react";
import { Web3Button, useContract } from "@thirdweb-dev/react";

const Web3ButtonWrapper = ({ contractAddress, onClick, children }: { contractAddress: string; onClick: () => Promise<void>; children: React.ReactNode }) => (
  <Web3Button contractAddress={contractAddress} action={onClick}>
    {children}
  </Web3Button>
);

export default function Airdrop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showEventPopup, setShowEventPopup] = useState(false);
  const { contract, error, isLoading } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495"); // Update with the correct contract address
  const toast = useToast();

  const handleClaimAirdrop = async () => {
    if (!contract || isLoading) return;

    try {
      // Call the claimAirdrop function
      await contract.call("claimAirdrop", []);

      setShowEventPopup(true);
      onOpen();
    } catch (error) {
      console.error(error);
      toast({
        title: "Airdrop Claim Failed",
        description: (error as Error)?.message || "An error occurred while claiming the Airdrop. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isLoading) return <div>Loading...</div>; // Handle loading state

  if (error) {
    console.error(error);
    return <div>Error loading contract. Please try again.</div>; // Handle error state
  }

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
                <Web3ButtonWrapper contractAddress="0xEddb551809Af5f6FE388288749cc89CB1bC5C495" onClick={handleClaimAirdrop}>
                  Claim Your #MO
                </Web3ButtonWrapper>
              </Stack>
            </SimpleGrid>
          </Card>
        </SimpleGrid>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Airdrop Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
