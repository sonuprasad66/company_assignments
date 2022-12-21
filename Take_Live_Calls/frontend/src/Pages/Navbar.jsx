import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { AddEvent } from "./AddEvent";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      {token ? (
        <Box boxShadow="xl" p="6">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Link to="/">
              <Heading>Home</Heading>
            </Link>
            <Link>
              <AddEvent />
            </Link>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Image
                w={"40px"}
                h={"40px"}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
              <Heading size={"md"}>{currentUser?.username}</Heading>
            </Flex>
            <Link>
              <Button onClick={handleLogout}>Logout</Button>
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box boxShadow="xl" p="6">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Link to="/">
              <Heading>Home</Heading>
            </Link>
            <Link>
              <AddEvent />
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Signup</Button>
            </Link>
          </Flex>
        </Box>
      )}
    </>
  );
};