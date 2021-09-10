import React, { useContext } from "react";
import styled from "styled-components";

import { ApptContext } from "../App";

import AdminAppt from "./AdminAppt";
import NewAppt from "./NewAppt";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AdminAppts = () => {
  const { appointments } = useContext(ApptContext);

  return (
    <Container>
      <NewAppt />
      {appointments.map((appt) => (
        <AdminAppt key={appt.ID} appt={appt} />
      ))}
    </Container>
  );
};

export default AdminAppts;
