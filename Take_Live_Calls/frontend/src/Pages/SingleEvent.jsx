import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleEvent } from "../Redux/Event/action";

export const SingleEvent = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const singleEvent = useSelector((state) => state.EventReducer.singleEvent);

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch]);

  const handleAddEvent = () => {
    console.log(singleEvent._id);
  };

  return (
    <>
      <Box w={"300px"} border="1px solid red" m={"100px auto"}>
        <Image
          w={"100px"}
          h={"100px"}
          rounded={true}
          src="https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg"
          alt="event"
        />
        <Box>
          <Heading>{singleEvent.eventname}</Heading>
          <Text>{singleEvent.description}</Text>
        </Box>
        <Box>
          <Heading size={"50px"}>Start At :-{singleEvent.starttime}</Heading>
          <Heading size={"50px"}>End At :- {singleEvent.endtime}</Heading>
        </Box>
        <Heading size={"70px"}>
          Player Left :-
          {singleEvent.playerslimit ? singleEvent.playerslimit : "Out Of Slot"}
        </Heading>
        <Button onClick={handleAddEvent}>Join Event</Button>
      </Box>
    </>
  );
};
