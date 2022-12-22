import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJoinEvent } from "../Redux/JoinEvent/action";
import acceptNotification, {
  getNotification,
  rejectNotification,
} from "../Redux/Notification/action";

export const MyEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const joinEventUser = useSelector(
    (state) => state.JoinEventReducer.joinevent
  );
  console.log(joinEventUser);
  useEffect(() => {
    dispatch(getJoinEvent(id));
  }, [dispatch, id]);

  const notification = useSelector(
    (state) => state.NotificationReducer.notification
  );
  console.log(notification);
  useEffect(() => {
    dispatch(getNotification(id));
  }, [dispatch, id]);

  const handleAccept = (Id, user_id) => {
    let payload = { id: Id, user_id: user_id };
    dispatch(acceptNotification(payload)).then((res) => {
      console.log(res);
      alert(res.payload);
      dispatch(getNotification(id));
      dispatch(getJoinEvent(id));
    });
  };

  const handleReject = (Id, user_id) => {
    let payload = { id: Id, user_id: user_id };
    dispatch(rejectNotification(payload)).then((res) => {
      console.log(res);
      alert("User Rejected Successfully");
      dispatch(getNotification(id));
    });
  };

  return (
    <Box w={"80%"} m={"50px auto"} boxShadow="md" p="6">
      <TableContainer>
        {notification.length === 0 ? (
          ""
        ) : (
          <>
            <Table variant="striped" border={"1px dashed grey"}>
              <Thead>
                <Tr>
                  <Th>User Name</Th>
                  <Th>Notification</Th>
                  <Th>Accept</Th>
                  <Th>Reject</Th>
                </Tr>
              </Thead>
              <Tbody>
                {notification?.map((item) => (
                  <>
                    <Tr>
                      <Td>{item.username}</Td>
                      <Td>{item.notification}</Td>
                      <Td>
                        <Button
                          onClick={() =>
                            handleAccept(item.event_id, item.user_id)
                          }
                          colorScheme={"green"}
                        >
                          Accept
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() =>
                            handleReject(item.event_id, item.user_id)
                          }
                          colorScheme={"red"}
                        >
                          Reject
                        </Button>
                      </Td>
                    </Tr>
                  </>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </TableContainer>
      <TableContainer>
        <Table variant="striped" border={"1px dashed grey"}>
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Event Name</Th>
              <Th>Description</Th>
              <Th>Start Time</Th>
              <Th>End Time</Th>
            </Tr>
          </Thead>

          <Tbody>
            {joinEventUser?.map((item) => (
              <>
                <Tr>
                  <Td>{item.username}</Td>
                  <Td>{item.eventname}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.starttime}</Td>
                  <Td>{item.endtime}</Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
