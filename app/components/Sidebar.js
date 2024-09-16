'use client';

import { Box, VStack, Text, Avatar, Button, IconButton, Divider, Badge, Collapse, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "@chakra-ui/icons";

export default function Sidebar() {
  const { isOpen: isWorkspaceOpen, onToggle: onWorkspaceToggle } = useDisclosure();
  const { isOpen: isLaunchpadOpen, onToggle: onLaunchpadToggle } = useDisclosure();
  const { isOpen: isPinnedOpen, onToggle: onPinnedToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      width="250px"
      height="100%"
      bg="white"
      shadow="md"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      {/* Logo and User Information */}
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" color="blue.500">
          Mudirr
        </Text>
        <VStack align="start" spacing={2} mt={4}>
          <Avatar name="Haseena Jameela" src="https://bit.ly/dan-abramov" />
          <Text fontWeight="bold">Haseena Jameela</Text>
          <Text fontSize="sm">haseenajameela@email.com</Text>
        </VStack>
      </Box>

      <Divider />

      {/* Tab Buttons */}
      <Box p={4}>
        <Button size="sm" colorScheme="green" variant="outline" w="full">
          Personal
        </Button>
        <Button size="sm" colorScheme="gray" variant="outline" w="full" mt={2}>
          Invited
        </Button>
      </Box>

      <Divider />

      {/* Dashboard Section */}
      <VStack align="stretch" p={4} spacing={4}>
        <Text fontWeight="bold">
          <StarIcon mr={2} /> Dashboard
        </Text>
        <Text>Project History</Text>
        <Text>Client History</Text>
        <Text>Emails</Text>
      </VStack>

      <Divider />

      {/* Workspaces Section */}
      <Box p={4}>
        <Button
          w="full"
          variant="ghost"
          rightIcon={isWorkspaceOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={onWorkspaceToggle}
        >
          Workspaces
        </Button>
        <Badge colorScheme="gray" ml={2} fontSize="xs">Coming Soon</Badge>
        <Collapse in={isWorkspaceOpen}>
          <VStack align="stretch" mt={4} spacing={2}>
            <Text>Work Space Name 1</Text>
            <Text>Work Space Name 2</Text>
            <Text>Work Space Name 3</Text>
          </VStack>
        </Collapse>
        <Text mt={2} color="blue.500" fontSize="sm">See All</Text>
      </Box>

      <Divider />

      {/* Launchpad Section */}
      <Box p={4}>
        <Button
          w="full"
          variant="ghost"
          rightIcon={isLaunchpadOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={onLaunchpadToggle}
        >
          Launchpad
        </Button>
        <Collapse in={isLaunchpadOpen}>
          <VStack align="stretch" mt={4} spacing={2}>
            <Text>Business Name 1</Text>
            <Text>Business Name 2</Text>
            <Text>Business Name 3</Text>
          </VStack>
        </Collapse>
        <Text mt={2} color="blue.500" fontSize="sm">See All</Text>
      </Box>

      <Divider />

      {/* Pinned Projects Section */}
      <Box p={4}>
        <Button
          w="full"
          variant="ghost"
          rightIcon={isPinnedOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={onPinnedToggle}
        >
          Pinned Projects (3/3)
        </Button>
        <Collapse in={isPinnedOpen}>
          <VStack align="stretch" mt={4} spacing={2}>
            <Text>Project Name 1</Text>
            <Text>Project Name 2</Text>
            <Text>Project Name 3</Text>
          </VStack>
        </Collapse>
      </Box>

      <Divider />

      {/* Account Settings and Logout */}
      <VStack align="stretch" p={4} spacing={4}>
        <Text>Account Settings</Text>
        <Text>Logout</Text>
      </VStack>
    </Box>
  );
}
