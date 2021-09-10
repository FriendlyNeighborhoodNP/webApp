import { useState, useEffect, useCallback } from "react";
import urlBase from "../urlBase";

const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApptointments = useCallback(() => {
    fetch(`${urlBase}/api/appt`)
      .then((data) => data.json())
      .then((data) =>
        setAppointments(
          data.sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
        )
      )
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  useEffect(fetchApptointments, []);

  const deleteAppointment = async (id, token) => {
    setLoading(true);
    try {
      await fetch(`${urlBase}/api/appt/${id}?t=${token}`, {
        method: "DELETE",
      }).then((data) => data.json());
      setAppointments((prevState, props) => {
        return prevState.filter((appt) => appt.ID !== id);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const addAppointment = async (appt, token) => {
    try {
      const data = await fetch(`${urlBase}/api/appt?t=${token}`, {
        method: "POST",
        body: JSON.stringify(appt),
      }).then((data) => data.json());

      setAppointments((prevState, props) => {
        return [...prevState, data].sort(
          (a, b) => new Date(a.datetime) - new Date(b.datetime)
        );
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    appointments,
    deleteAppointment,
    addAppointment,
    loading,
  };
};

export default useAppointments;
