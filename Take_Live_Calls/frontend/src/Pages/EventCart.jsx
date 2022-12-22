import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/Auth/action";
import { getJoinCurrentUser } from "../Redux/JoinEvent/action";

export const EventCart = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const JoinCurrentUser = useSelector(
    (state) => state.JoinEventReducer.currentjoinEvent
  );

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getJoinCurrentUser(currentUser.username));
  }, [dispatch, currentUser.username]);

  return (
    <Box w={"80%"} m={"50px auto"} boxShadow="md" p="6">
      {JoinCurrentUser.length === 0 ? (
        <Heading
          size={"70px"}
          m={"20px"}
          textAlign={"center"}
        >{`Hey ${currentUser.username} You haven't Booked Any Events`}</Heading>
      ) : (
        <>
          <TableContainer>
            <Heading
              size={"70px"}
              m={"20px"}
              textAlign={"center"}
            >{`Hey ${currentUser.username} Your Booked Events List`}</Heading>
            <Table variant="striped" border={"1px dashed grey"}>
              <Thead>
                <Tr>
                  <Th>Event Name</Th>
                  <Th>Description</Th>
                  <Th>Start Time</Th>
                  <Th>End Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {JoinCurrentUser?.map((item) => (
                  <>
                    <Tr>
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
        </>
      )}
    </Box>
  );
};
