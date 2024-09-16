'use client';


import {
  Box,
  Grid,
  Tabs,
  TabList,
  Tab,
  Button,
  HStack,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import Footer from "./Footer";
export default function ProjectSection() {
  return (
    <Box p={6} minH="100vh" bg="#f4f5f7" pl="270px">
      {" "}
      {/* Increased padding-left for more space */}
      <HStack justify="space-between" mb={4}>
        {/* Tabs for Filtering */}
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Ongoing</Tab>
            <Tab>Completed</Tab>
            <Tab>Cancelled</Tab>
            <Tab>Drafts</Tab>
          </TabList>
        </Tabs>

        {/* Create a Project Button */}
        <Button colorScheme="blue" size="md">
          + Create a Project
        </Button>
      </HStack>
      {/* Project Cards Grid */}
      <Grid
        templateColumns={{
          base: "1fr", // 1 card on mobile
          sm: "repeat(2, 1fr)", // 2 cards on small screens (tablets)
          md: "repeat(3, 1fr)", // 3 cards on medium screens (tablets)
          lg: "repeat(4, 1fr)", // 4 cards on large screens (desktops)
        }}
        gap={6}
      >
        <ProjectCard
          title="Make an E-Commerce Website for a Brand Store"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Dec 5th"
        />
        <ProjectCard
          title="Website technical maintenance project"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Jan 1st"
        />
        <ProjectCard
          title="WordPress website speed and SEO Optimization"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="In 3 days"
        />
        <ProjectCard
          title="Make an E-Commerce Website for a Brand Store"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Dec 5th"
        />
        <ProjectCard
          title="Website technical maintenance project"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Jan 1st"
        />
        <ProjectCard
          title="WordPress website speed and SEO Optimization"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="In 3 days"
        />
        <ProjectCard
          title="Make an E-Commerce Website for a Brand Store"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Dec 5th"
        />
        <ProjectCard
          title="Website technical maintenance project"
          status="Ongoing"
          progress={75}
          progressText="3/4 Done"
          milestone="Jan 1st"
        />
      </Grid>
    </Box>
  );
}