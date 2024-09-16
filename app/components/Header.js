'use client';


// import { Box, Heading, Text, SimpleGrid, VStack, HStack, Icon } from "@chakra-ui/react";
// import { FaCheckCircle, FaSpinner, FaFileAlt, FaTimesCircle } from "react-icons/fa"; // Icons from React Icons

// export default function Header() {
//   return (
//     <Box bg="white" p={6} mb={6} shadow="sm" borderBottom="1px" borderColor="gray.200" pl="270px">  {/* Adjusted padding-left */}
//       {/* Welcome Section */}
//       <VStack align="start" spacing={2} mb={6}>
//         <Heading size="lg">Welcome Back, Haseena!</Heading>
//         <Text>You have accomplished a lot today. Let us handle the rest.</Text>
//       </VStack>

//       {/* Status Cards Section */}
//       <SimpleGrid columns={[1, 2, 4]} spacing={8}>
//         <StatusCard
//           icon={FaCheckCircle}
//           count="30"
//           label="Completed"
//           colorScheme="green"
//         />
//         <StatusCard
//           icon={FaSpinner}
//           count="02"
//           label="Ongoing"
//           colorScheme="blue"
//         />
//         <StatusCard
//           icon={FaFileAlt}
//           count="04"
//           label="Drafts"
//           colorScheme="orange"
//         />
//         <StatusCard
//           icon={FaTimesCircle}
//           count="02"
//           label="Cancelled"
//           colorScheme="red"
//         />
//       </SimpleGrid>
//     </Box>
//   );
// }

// function StatusCard({ icon, count, label, colorScheme }) {
//   return (
//     <HStack spacing={1} align="center">
//       <Icon as={icon} boxSize={8} color={`${colorScheme}.500`} />
//       <VStack align="start" spacing={0}>
//         <Heading size="md">{count}</Heading>
//         <Text fontSize="sm">{label}</Text>
//       </VStack>
//     </HStack>
//   );
// }
import { Box, Heading, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { FaCheckCircle, FaSpinner, FaFileAlt, FaTimesCircle } from "react-icons/fa"; // Icons from React Icons

function StatusCard({ icon, count, label, colorScheme }) {
  return (
    <HStack spacing={4} align="center">
      <Box as={icon} boxSize={8} color={`${colorScheme}.500`} />
      <VStack align="start" spacing={0}>
        <Heading size="md">{count}</Heading>
        <Text fontSize="sm">{label}</Text>
      </VStack>
    </HStack>
  );
}

export default function Header() {
  return (
    <Box bg="white" p={6} mb={6} shadow="sm" borderBottom="1px" borderColor="gray.200" pl="270px">
      <VStack align="start" spacing={6}>
        {/* Top Left: Welcome Section */}
        <VStack align="start" spacing={2}>
          <Heading size="lg">Welcome Back, Haseena!</Heading>
          <Text>You have accomplished a lot today. Let us handle the rest.</Text>
        </VStack>

        {/* Left Aligned Status Cards */}
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          <StatusCard
            icon={FaCheckCircle}
            count="30"
            label="Completed"
            colorScheme="green"
          />
          <StatusCard
            icon={FaSpinner}
            count="02"
            label="Ongoing"
            colorScheme="blue"
          />
          <StatusCard
            icon={FaFileAlt}
            count="04"
            label="Drafts"
            colorScheme="orange"
          />
          <StatusCard
            icon={FaTimesCircle}
            count="02"
            label="Cancelled"
            colorScheme="red"
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
