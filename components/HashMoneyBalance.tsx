import React from "react";
import { useBalance, useContract } from "@thirdweb-dev/react";
import { Box, Card, Heading, SimpleGrid, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { ethers } from "ethers";

const tokenAddress = "0xEddb551809Af5f6FE388288749cc89CB1bC5C495";

function HashMoneyBalance() {
  const { data, isLoading, error } = useBalance(tokenAddress);
  const balanceWithDecimal = data ? ethers.utils.formatUnits(data.value.toString(), 18) : null;

  const { contract } = useContract(tokenAddress);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <Card p={2} mt={2} bg="#23253e">
  <Box
    textAlign="center"
    mb={1}
    bg="blue.500"
    bgGradient="linear(to-l, blue.900, blue.500)"
    borderRadius="md"
    p={1}
  >
    <Heading textAlign="center" fontSize="2xl" color="white">
       HashMoney
    </Heading>
  </Box>
  <SimpleGrid columns={1} width="410px" mx="auto">
    <Flex justifyContent="center" alignItems="center" mb={0}>
      <Card p={1} m={1} bg="white" borderRadius="md" width="100%">
        <Box textAlign="center">
          <Text textAlign="center" fontSize="l" fontWeight="bold">
            Your #MO Balance: {balanceWithDecimal}
          </Text>
        </Box>
      </Card>
    </Flex>
    <Flex justifyContent="center" alignItems="center" mb={1}>
      <Card p={1} m={1} bg="white" borderRadius="md" width="100%">
        <Box textAlign="center">
          <Text textAlign="center" fontSize="l" fontWeight="bold">
            Contract Address:{" "}
            <a href={`https://polygonscan.com/address/0xEddb551809Af5f6FE388288749cc89CB1bC5C495`}>
              <Text as="span" fontWeight="bold" color="#23253e">
                {tokenAddress}
              </Text>
            </a>
          </Text>
        </Box>
      </Card>
    </Flex>
  </SimpleGrid>
</Card>

  );
}

export default HashMoneyBalance;

