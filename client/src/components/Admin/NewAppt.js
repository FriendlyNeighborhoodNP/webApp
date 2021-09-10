import React, { useReducer, useContext } from "react";
import styled from "styled-components";

import AdminMap from "../Maps/AdminMap";
import { ApptContext } from "../App";
import { AdminContext } from ".";

const newDate = new Date();
newDate.setSeconds(0);
newDate.setMilliseconds(0);

const initialState = {
  title: "",
  description: "",
  datetime: newDate,
  lat: 0,
  lon: 0,
};

const reducer = (state, action) => {
  const oldDateCopy = new Date(state.datetime.toISOString());
  switch (action.type) {
    case "updateTitle":
      return { ...state, title: action.payload };
    case "updateDescription":
      return { ...state, description: action.payload };
    case "updateDate":
      const newDate = new Date(action.payload);
      oldDateCopy.setFullYear(newDate.getFullYear());
      oldDateCopy.setMonth(newDate.getMonth());
      oldDateCopy.setDate(newDate.getDate());
      return { ...state, datetime: oldDateCopy };
    case "updateTime":
      const [hour, minute] = action.payload.split(":");
      oldDateCopy.setHours(hour);
      oldDateCopy.setMinutes(minute);
      return { ...state, datetime: oldDateCopy };
    case "updateCoord":
      return { ...state, lon: action.payload[0], lat: action.payload[1] };

    default:
      return state;
  }
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: var(--pink);
  border: none;
  border-radius: 6px;
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  margin: 20px;
`;

const NewAppt = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const { addAppointment } = useContext(ApptContext);
  const { token } = useContext(AdminContext);

  const stateDay = formState.datetime.getDate();
  const defaultDay = stateDay < 10 ? `0${stateDay}` : stateDay.toString();
  const stateMonth = formState.datetime.getMonth() + 1;
  const defaultMonth =
    stateMonth < 10 ? `0${stateMonth}` : stateMonth.toString();
  const defaultDate = `${formState.datetime.getFullYear()}-${defaultMonth}-${defaultDay}`;

  const handleSubmit = () => {
    if (
      formState.title.length > 0 &&
      formState.description.length > 0 &&
      formState.lat !== 0 &&
      formState.lon !== 0
    ) {
      addAppointment(formState, token);
    } else {
      if (formState.title.length === 0) alert("Please add a title");
      if (formState.description.length === 0) alert("Please add a description");
      if (formState.lat === 0 || formState.lon === 0)
        alert("Please select a location on the map");
    }
  };

  return (
    <Container>
      <h2 style={{ color: "var(--pink)" }}>New Event</h2>
      <Input
        type="text"
        value={formState.title}
        onChange={(e) =>
          dispatch({ type: "updateTitle", payload: e.target.value })
        }
        placeholder="Title"
      />
      <Input
        type="text"
        value={formState.description}
        placeholder="Description"
        onChange={(e) =>
          dispatch({ type: "updateDescription", payload: e.target.value })
        }
      />
      <Input
        required
        value={defaultDate}
        type="date"
        onChange={(e) =>
          dispatch({ type: "updateDate", payload: e.target.value })
        }
      />
      <Input
        required
        type="time"
        defaultValue={`${formState.datetime.getHours()}:${
          formState.datetime.getMinutes
        }`}
        onChange={(e) =>
          dispatch({ type: "updateTime", payload: e.target.value })
        }
      />
      <AdminMap
        updateCoord={(payload) => dispatch({ type: "updateCoord", payload })}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default NewAppt;
