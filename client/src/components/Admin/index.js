import React, { useEffect, createContext } from "react";
import styled from "styled-components";

import Login from "./Login";
import AdminAppts from "./AdminAppts";
import useAuth from "../../hooks/useAuth";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdminContext = createContext({
  token: "",
});

const Admin = () => {
  const { token, error, fetchToken } = useAuth();

  useEffect(() => console.error(error), [error]);

  return (
    <AdminContext.Provider value={{ token }}>
      <Container>
        {token ? <AdminAppts /> : <Login fetchToken={fetchToken} />}
      </Container>
    </AdminContext.Provider>
  );
};

export default Admin;
