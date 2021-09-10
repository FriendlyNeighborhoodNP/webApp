import { useState, useContext } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";
import MainMap from "../Maps/MainMap";
import { ApptContext } from ".";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Appts = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 10px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const ApptLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: 500px;
  overflow-y: auto;
`;

const Heading = styled.h2`
  color: var(--navy);
`;

const ScheduleEvent = styled.a`
  background: var(--pink);
  border: none;
  border-radius: 6px;
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  &:visited {
    color: white;
  }
`;

const ApptLink = styled(Link)`
  color: var(--pink);
  &:visited {
    color: var(--pink);
  }
  & h3 {
    margin: 0 0 5px 0;
  }
`;

const ApptDate = styled.p`
  color: var(--navy);
  margin: 0;
  font-size: 0.8rem;
  font-style: italic;
`;
const ApptDescription = styled.p`
  margin: 0 0 5px 0;
`;

const MapSection = () => {
  const { appointments } = useContext(ApptContext);
  const [apptsToShow, setApptsToShow] = useState(appointments.slice(0, 3));
  return (
    <Section id="schedule-section">
      <Heading>Schedule</Heading>
      <ScheduleEvent href="mailto:admin@friendlyneighborhoodnp.com">
        Schedule Now
      </ScheduleEvent>
      <Appts>
        <MainMap locations={appointments.map((appt) => [appt.lon, appt.lat])} />
        <ApptLinks>
          {apptsToShow.map((appt) => (
            <div key={appt.ID}>
              <ApptLink to={`/appt/${appt.ID}`}>
                <h3>{appt.title}</h3>
              </ApptLink>
              <ApptDate>
                {new Date(appt.datetime).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </ApptDate>
              <ApptDescription>
                {appt.description.slice(0, 50) + "..."}
              </ApptDescription>
            </div>
          ))}
          {appointments.length !== apptsToShow.length && (
            <ScheduleEvent
              onClick={() =>
                setApptsToShow((prevState) =>
                  appointments.slice(0, prevState.length + 3)
                )
              }
            >
              Show More
            </ScheduleEvent>
          )}
        </ApptLinks>
      </Appts>
    </Section>
  );
};

export default MapSection;
