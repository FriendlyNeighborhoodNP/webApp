import styled from "styled-components";
import { Heading, Section, SectionText } from "./SharedStyles";

import KateImg from "../../images/kate.jpeg";
import AmberImg from "../../images/amber.jpeg";

const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const AboutImg = styled.img`
  width: 90%;
  max-width: 250px;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
`;

const SectionHeader = styled.h2`
  color: var(--pink);
`;

const SectionSubHeader = styled.h4`
  color: var(--navy);
  font-style: italic;
  margin-top: -35px;
`;

const AboutSection = () => {
  return (
    <Section bg="var(--navy)" id="about-section">
      <Heading color="var(--yellow)">About</Heading>
      <SectionText>
        Friendly Neighborhood NP is a nurse practitioner owned and operated
        concierge mobile health practice in Richmond Hill, GA. We offer Rapid
        and PCR COVID-19 testing on-site and in your home. We understand the
        current challenge of obtaining an appointment for face-to-face sick
        visits. <br />
        <br />
        It is our mission to increase access to primary care services by
        providing in-home patient evaluation and treatment of COVID-19 and
        COVID-like illness. We strive to ease this burden because we know that
        when patients receive timely treatment, they have better outcomes. While
        we do not accept insurance at this time, we use CMS reimbursement rates
        to determine pricing and ensure that each patient's invoice is itemized
        and appropriately coded to simplify third party payer reimbursement.
        <br />
        <br />
        Who is Friendly Neighborhood NP?
        <br />
        We are local nurse practitioners who have been working hard through this
        pandemic helping patients with COVID-19 manage their symptoms and safely
        recover at home.
      </SectionText>
      <AboutInfo>
        <AboutImg src={KateImg} />
        <SectionText>
          <SectionHeader>Kathryn Strickland</SectionHeader>
          <SectionSubHeader>MSN, APRN, FNP-C</SectionSubHeader>
          Kate is an AANP certified nurse practitioner with over eight years of
          nursing experience in primary care, urgent care, family medicine,
          public health, correctional medicine, veteran focused healthcare, and
          emergency response. She graduated from South University's Master of in
          Science Nursing - Family Nurse practitioner program June 2019.
          <br />
          <br /> She is a US Public Health Service Commissioned Corps veteran
          who prides herself on her service to her patients, her community, and
          her country.
          <br />
          <br /> Kate lives in Richmond Hill, GA, with her husband, three
          children, and loyal canine companion, Clara.
        </SectionText>
      </AboutInfo>
      <AboutInfo>
        <AboutImg src={AmberImg} />
        <SectionText>
          <SectionHeader>Amber Brown</SectionHeader>
          <SectionSubHeader>MSN, APRN, FNP-C</SectionSubHeader>
          Amber Brown is an AANP certified nurse practitioner with over 5 years
          of nursing experience in family medicine, cardiology, and
          maternal/newborn care. She graduated from South University's Master of
          in Science Nursing - Family Nurse practitioner program March 2020.
          <br />
          <br /> She believes everyone is entitled to comprehensive medical
          care, and is passionate about serving her patients and making positive
          community changes.
          <br />
          <br /> Amber lives in midtown Savannah with her active duty Coast
          Guard husband, and two rescue dogs Pinot and Porter.
        </SectionText>
      </AboutInfo>
    </Section>
  );
};

export default AboutSection;
