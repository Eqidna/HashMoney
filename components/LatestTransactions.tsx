import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { Card, Heading, SimpleGrid, Box, Stack, Flex, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const truncateAddress = (address: string) => {
  if (address) {
    const start = address.substring(0, 6);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
  }
  return "";
};

export default function LatestTransactions() {
  const { contract } = useContract("0xEddb551809Af5f6FE388288749cc89CB1bC5C495");
  const [blockTimestamps, setBlockTimestamps] = useState({});

  // Fetch the latest event
  const { data: allEvents, isLoading: isEventLoading } = useContractEvents(
    contract,
    
  );

  
 

  return (
    <Card p={5} mt={5} bg="#C7DDFF">
      <Heading textAlign="center" style={{ color: "#3A619C" }} fontSize="2xl">
        Latest Transactions
      </Heading>
      <SimpleGrid columns={1}>
        <Card p={2} m={2} bg="#3A619C">
        <Box textAlign="center" mb={2}>
  <div className="latest-transactions-box">
    {isEventLoading ? (
      <Spinner />
    ) : (
      allEvents?.slice(0, 3).map((event: any, index: number) => (
        <Card key={index} p={2} my={1} bg="#white">
          <a href="https://polygonscan.com/token/0xEddb551809Af5f6FE388288749cc89CB1bC5C495" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl">{event.data?.message}</Text>
            <Text>Event: {event.event || event.eventName}</Text>
            <Text>Amount: {event.data?.amount ? ethers.utils.formatEther(event.data.amount) : ""}</Text>
          </a>
        </Card>
      )).reverse() ?? []
    )}
  </div>
</Box>

          <SimpleGrid columns={1} spacing={5}>
            <Stack spacing={5}>
              {/* Render additional content here */}
            </Stack>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Card>
  );
}
