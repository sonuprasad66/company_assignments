import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddEvent = () => {
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
  };

  const handleEvent = () => {
    if (token) {
      onOpen();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Button onClick={handleEvent}>Create Event</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <form id="form" onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Event Name </FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Event Name "
                    name="eventname"
                    onChange={handleChange}
                  />

                  <FormLabel>Event Description </FormLabel>
                  <Textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    placeholder="Write Event Sort Description"
                  />

                  <FormLabel>Event Start Time </FormLabel>
                  <Input
                    type="time"
                    name="starttime"
                    placeholder="Select Start Time"
                    onChange={handleChange}
                  />

                  <FormLabel>Event End Time </FormLabel>
                  <Input
                    type="time"
                    name="endtime"
                    placeholder="Select End Time"
                    onChange={handleChange}
                  />

                  <FormLabel>Players Limit</FormLabel>
                  <Input
                    type="number"
                    name="playerslimit"
                    placeholder="Enter Players Limit"
                    onChange={handleChange}
                  />
                </FormControl>

                <Button type="submit" w="full" mt={5} colorScheme="blue">
                  Add Event
                </Button>
              </form>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
