import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../Redux/Auth/action";

export const Signup = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
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
    dispatch(userSignup(data)).then((res) => {
      if (res.payload.message === "Signup Successfull") {
        alert(res.payload.message);
        navigate("/login");
      } else {
        alert(res.payload.message);
      }
    });
  };

  return (
    <>
      <Box
        w="300px"
        m="100px auto"
        p={5}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form id="form" onSubmit={handleSubmit}>
          <Heading textAlign={"center"} size="md">
            Sign Up
          </Heading>
          <FormControl>
            <FormLabel>User Name </FormLabel>
            <Input
              type="text"
              placeholder="Enter User Name "
              name="username"
              onChange={handleChange}
            />
            <FormLabel>Password </FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" w="full" mt={5} colorScheme="blue">
            Sign Up
          </Button>
        </form>
      </Box>
    </>
  );
};
