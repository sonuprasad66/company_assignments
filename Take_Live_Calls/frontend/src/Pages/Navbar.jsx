import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { AddEvent } from "./AddEvent";
import * as types from "../Redux/Auth/actionTypes";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    dispatch({ type: types.USER_LOGOUT_SUCCESS });
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      {isAuth || token ? (
        <Box boxShadow="md" p="6">
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
            <Link to={"/eventcart"}>
              <Button>My Event Cart</Button>
            </Link>
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
