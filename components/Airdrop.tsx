import { Box, Card, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Airdrop() {
  const { contract } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
  const { mutateAsync: claimAirdrop, isLoading } = useContractWrite(contract, "claimAirdrop");

  const call = async (args: never[]) => {
    try {
      const data = await claimAirdrop({ args });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <Card p={5} mt={5} bg="#23253e">
      <Heading
        textAlign="center"
        bg="blue.500"
        bgGradient="linear(to-r, blue.900, blue.500)"
        borderRadius="md"
        p={1}
        fontSize="xl"
        style={{ color: 'white' }}
      >
        Claim Airdrop
      </Heading>
      <SimpleGrid columns={1} width="275px" mx="auto">
        <Card
          p={2}
          m={2}
          bg="blue.500"
          bgGradient="linear(to-r, blue.900, blue.500)"
          borderRadius="md"
        >
          <Box textAlign="center" mb={1}>
            {/* Render any additional content here */}
          </Box>
          <SimpleGrid columns={1} spacing={5}>
            <Stack spacing={5}>
              <Web3Button
                contractAddress="0xEddb551809Af5f6FE388288749cc89CB1bC5C495"
                action={(contract) => {
                  contract.call("claimAirdrop", []);
                }}
              >
                Claim Your HashMoney
              </Web3Button>
            </Stack>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Card>
  );
}
