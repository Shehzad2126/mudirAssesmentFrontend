import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

const ProjectForm = ({ isOpen, onClose, handleCreateProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    progress: 0,
    milestone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    handleCreateProject(formData); // Send the form data to parent component to create a project
    setFormData({ name: "", description: "", progress: 0, milestone: "" }); // Reset form
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Project Title"
            name="name"
            value={formData.name}
            onChange={handleChange}
            mb={4}
          />
          <Textarea
            placeholder="Project Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            mb={4}
          />
          <Input
            placeholder="Milestone Date"
            name="milestone"
            value={formData.milestone}
            onChange={handleChange}
            mb={4}
          />
          <Input
            placeholder="Progress"
            name="progress"
            type="number"
            value={formData.progress}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Create Project
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectForm;
