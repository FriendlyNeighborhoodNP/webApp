import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import EventMap from "../Maps/EventMap";

const ApptSection = styled.div`
  background: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: var(--navy);
`;

const Dt = styled.h3`
  color: var(--pink);
`;

const Description = styled.p``;

const Appt = () => {
  const [appt, setAppt] = useState();
  const route = useLocation();
  const apptId = parseInt(route.pathname.slice(6));

  useEffect(() => {
    fetch(`http://localhost:8000/api/appt/${apptId}`)
      .then((data) => data.json())
      .then(setAppt);
  }, [apptId]);

  return (
    <ApptSection>
      {appt && (
        <>
          <Heading>{appt.title}</Heading>
          <EventMap lon={appt.lon} lat={appt.lat} />

          <Dt>
            {new Date(appt.datetime).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </Dt>

          <Description>{appt.description}</Description>
        </>
      )}
    </ApptSection>
  );
};

export default Appt;
