import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import { SingleEvent } from "../Pages/SingleEvent";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/singleevent/:id" element={<SingleEvent />} />
    </Routes>
  );
};
