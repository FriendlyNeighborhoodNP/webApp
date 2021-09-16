import React, { useContext } from "react";
import styled from "styled-components";

import { ApptContext } from "./index";
import MapSection from "./MapSection";
import AboutSection from "./AboutSection";
import CovidSection from "./CovidSection";
import ServicesSection from "./Services";
import PartnerSection from "./PartnerSection";
import Loader from "../Loading";

const Container = styled.div`
  width: 100%;
  max-width: 900px;
`;

const Home = () => {
  const { appointments, loading } = useContext(ApptContext);

  return (
    <Container>
      {appointments.length > 0 && <MapSection />}
      {loading && <Loader />}
      <AboutSection />
      <CovidSection />
      <ServicesSection />
      <PartnerSection />
    </Container>
  );
};

export default Home;
