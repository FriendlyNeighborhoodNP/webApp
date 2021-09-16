import { Section, Heading, SectionText } from "./SharedStyles";
import styled from "styled-components";

const Link = styled.a`
  color: var(--navy);

  &:visited {
    color: var(--navy);
  }

  &:active {
    color: var(--navy) l;
  }
`;

const CovidSection = () => {
  return (
    <Section id="covid-section">
      <Heading color="var(--navy)">COVID-19 Testing Info</Heading>
      <SectionText bg="var(--pink)" color="white">
        It can be very confusing trying to keep up with emerging science during
        a global pandemic. The following links are included to help you make
        informed decisions for yourself and your loved ones.
        <br />
        <br />
        <Link href="https://dph.georgia.gov/covid-19-daily-status-report">
          Local COVID-19 Statistics
        </Link>
        <br />
        <br />
        <Link href="https://www.vaccines.gov">
          Where can I get a COVID-19 vaccine?
        </Link>
        <br />
        <br />
        <Link href="https://www.facebook.com/unbiasedscipod">
          Science The Unbiased Science Podcast (unbiasedscipod.com)
        </Link>
        <br />
        <br />
        <Link href="https://www.facebook.com/people/Your-local-epidemiologist/100053149454347/">
          Your Local Epidemiologist (substack.com)
        </Link>
        <br />
        <br />
        <Link href="https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html">
          CDC Guidance Coronavirus Disease 2019 (COVID-19) | CDC
        </Link>
      </SectionText>
    </Section>
  );
};

export default CovidSection;
