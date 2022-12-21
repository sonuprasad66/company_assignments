import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { getEvent } from "../Redux/Event/action";
import { addJoinEvent } from "../Redux/JoinEvent/action";

export const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const event = useSelector((state) => state.EventReducer.event);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getEvent());
  }, [dispatch]);

  if (!token) {
    navigate("/login");
  }

  const handleEventJoin = (id) => {
    let payload = { id: id };
    dispatch(addJoinEvent(payload)).then((res) => {
      console.log(res);
      dispatch(getEvent());
      alert(res.payload);
    });
  };

  return (
    <>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        boxShadow="md"
        p="6"
      >
        <Flex>
          <Input placeholder="Search Event Name" w={"500px"} />
          <Button>Search</Button>
        </Flex>
        <Select placeholder="Filter By Event Name" w={"300px"}>
          <option>Cricket</option>
        </Select>
      </Flex>

      <Box>
        {event?.map((item) => (
          <>
            <Flex
              w={"90%"}
              h={"150px"}
              m={"30px auto"}
              boxShadow={"outline"}
              // p={"6"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Link to={`/singleevent/${item._id}`}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  w={"130%"}
                >
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
                    Event Left :-{" "}
                    {item.playerslimit ? item.playerslimit : "Out Of Slot"}
                  </Heading>
                </Flex>
              </Link>
              {currentUser._id === item.user_id ? (
                <Link to={`/myevent/${item._id}`}>
                  <Button>My Event</Button>
                </Link>
              ) : (
                <Button
                  onClick={() => handleEventJoin(item._id)}
                  disabled={item.playerslimit === 0}
                >
                  Join Event
                </Button>
              )}
            </Flex>
          </>
        ))}
      </Box>
    </>
  );
};
