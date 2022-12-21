import React from "react";
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

  console.log(joinEventUser);

  useEffect(() => {
    dispatch(getJoinEvent(id));
  }, [dispatch, id]);

  return <div>MyEvent</div>;
};
