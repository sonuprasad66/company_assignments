import React, { useEffect, useState } from "react";
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
import { getProfile, userLogin } from "../Redux/Auth/action";

export const Login = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(data)).then((res) => {
      if (res.payload.message === "Login successful") {
        localStorage.setItem("token", res.payload.token);
        alert(res.payload.message);
        navigate("/");
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
            Login
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
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};
