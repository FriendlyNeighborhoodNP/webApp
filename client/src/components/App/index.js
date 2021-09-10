import React, { createContext } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "./Home";
import Appt from "../Appt";
import Admin from "../Admin";
import useAppointments from "../../hooks/useAppointments";

export const ApptContext = createContext({
  appointments: [],
  deleteAppointment: () => {},
  addAppointment: () => {},
  loading: false,
});

function App() {
  const { appointments, deleteAppointment, addAppointment, loading } =
    useAppointments();

  return (
    <ApptContext.Provider
      value={{ appointments, addAppointment, deleteAppointment, loading }}
    >
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appt">
            <Appt />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Layout>
    </ApptContext.Provider>
  );
}

export default App;
