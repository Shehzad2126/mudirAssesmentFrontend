'use client';


import { Box, Text, Button, Badge, IconButton, HStack, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Using Chakra's built-in icons

export default function ProjectCard({ title, status, progress, milestone, progressText }) {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.200"
      maxW="sm"
    >
      {/* Title Section */}
      <Text fontSize="lg" fontWeight="bold" mb={1}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500">Web</Text> {/* You can adjust this label if it's dynamic */}

      {/* Custom Progress Bar */}
      <HStack align="center" mt={4} mb={4}>
        <Box
          flex="1"
          height="2px"
          bg="blue.500"
          position="relative"
        >
          <Box
            as="span"
            position="absolute"
            left="0%"
            top="-6px"
            transform="translateX(-50%)"
            bg="blue.500"
            borderRadius="full"
            width="12px"
            height="12px"
          />
          <Box
            as="span"
            position="absolute"
            left="33%"
            top="-6px"
            transform="translateX(-50%)"
            bg="blue.500"
            borderRadius="full"
            width="12px"
            height="12px"
          />
          <Box
            as="span"
            position="absolute"
            left="66%"
            top="-6px"
            transform="translateX(-50%)"
            bg="blue.500"
            borderRadius="full"
            width="12px"
            height="12px"
          />
          <Box
            as="span"
            position="absolute"
            left="100%"
            top="-6px"
            transform="translateX(-50%)"
            bg="gray.300"
            borderRadius="full"
            width="12px"
            height="12px"
          />
        </Box>
        <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
          {progressText} {/* Example: 3/4 Done */}
        </Text>
      </HStack>

      {/* Status and Milestone */}
      <VStack align="start" spacing={2} mb={4}>
        <Badge colorScheme="blue" px={2} py={1} borderRadius="md">
          {status}
        </Badge>
        <Badge colorScheme="blue" px={2} py={1} borderRadius="md">
          Next milestone: {milestone}
        </Badge>
      </VStack>

      {/* Follow up with Manager */}
      <HStack justify="space-between" align="center">
        <Text fontWeight="bold">Follow up with manager</Text>
        <IconButton
          icon={<ArrowForwardIcon />}
          colorScheme="blue"
          aria-label="Follow up with manager"
          size="sm"
        />
      </HStack>
    </Box>
  );
}

