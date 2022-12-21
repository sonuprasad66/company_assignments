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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJoinEvent } from "../Redux/JoinEvent/action";

export const MyEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const joinEventUser = useSelector(
    (state) => state.JoinEventReducer.joinevent
  );

  useEffect(() => {
    dispatch(getJoinEvent(id));
  }, [dispatch, id]);

  return (
    <Box w={"80%"} m={"50px auto"} boxShadow="md" p="6">
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
