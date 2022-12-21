import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { getEvent, getSingleEvent } from "../Redux/Event/action";
import { addJoinEvent } from "../Redux/JoinEvent/action";

export const SingleEvent = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const singleEvent = useSelector((state) => state.EventReducer.singleEvent);

  useEffect(() => {
    dispatch(getSingleEvent(id));
    dispatch(getProfile());
  }, [dispatch, id]);

  const handleEventJoin = (id) => {
    let payload = { id: id };
    if (token) {
      dispatch(addJoinEvent(payload)).then((res) => {
        dispatch(getEvent());
        alert(res.payload);
      });
    } else {
      alert("Please Login First");
      navigate("/login");
    }
  };

  return (
    <>
      <Box w={"300px"} m={"50px auto"} boxShadow="md" p="4">
        <Image
          w={"100%"}
          h={"200px"}
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
        {currentUser._id === singleEvent.user_id ? (
          <Link to={`/myevent/${id}`}>
            <Button>My Event</Button>
          </Link>
        ) : (
          <Button
            onClick={() => handleEventJoin(id)}
            disabled={singleEvent.playerslimit === 0}
          >
            Join Event
          </Button>
        )}
      </Box>
    </>
  );
};
