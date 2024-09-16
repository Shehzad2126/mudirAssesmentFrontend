'use client';

import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaFileAlt, FaCalculator } from "react-icons/fa"; // Importing icons from react-icons

export default function Footer() {
  return (
    <Box bg="white" p={6} shadow="sm" borderTop="1px solid" borderColor="gray.200">
      <HStack justify="flex-start" spacing={10}>
        {/* Explore Documentation */}
        <HStack spacing={2}>
          <Icon as={FaFileAlt} boxSize={5} />
          <Text>Explore Documentation</Text>
        </HStack>

        {/* Cost Calculator */}
        <HStack spacing={2}>
          <Icon as={FaCalculator} boxSize={5} />
          <Text>Cost Calculator</Text>
        </HStack>

        {/* Billing Calculator */}
        <HStack spacing={2}>
          <Icon as={FaCalculator} boxSize={5} />
          <Text>Billing Calculator</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
