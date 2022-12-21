import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { getEvent } from "../Redux/Event/action";

export const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const event = useSelector((state) => state.EventReducer.event);
  // console.log("current ", currentUser);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getEvent());
  }, [dispatch]);

  if (!token) {
    navigate("/login");
  }

  const handleMyEventJoiner = () => {};

  const handleEventJoin = () => {};

  return (
    <>
      <Box>
        {event?.map((item) => (
          <>
            <Flex
              w={"90%"}
              h={"150px"}
              m={"30px auto"}
              boxShadow={"outline"}
              p={"6"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Link to={`/singleevent/${item._id}`}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Image
                    w={"100px"}
                    h={"100px"}
                    rounded={true}
                    src="https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg"
                    alt="event"
                  />
                  <Box>
                    <Heading>{item.eventname}</Heading>
                    <Text>{item.description}</Text>
                  </Box>
                  <Box>
                    <Heading size={"50px"}>Start At :-{item.starttime}</Heading>
                    <Heading size={"50px"}>End At :- {item.endtime}</Heading>
                  </Box>
                  <Heading size={"70px"}>
                    Player Left :-
                    {item.playerslimit ? item.playerslimit : "Out Of Slot"}
                  </Heading>
                </Flex>
              </Link>
              {currentUser._id === item.user_id ? (
                <Button onClick={handleMyEventJoiner}>My Event</Button>
              ) : (
                <Button onClick={handleEventJoin}>Join Event</Button>
              )}
            </Flex>
          </>
        ))}
      </Box>
    </>
  );
};
