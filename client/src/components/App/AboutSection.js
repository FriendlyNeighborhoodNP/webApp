import styled from "styled-components";
import { Heading, Section, SectionText } from "./SharedStyles";

import KateImg from "../../images/kate.jpeg";

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

const AboutSection = () => {
  return (
    <Section bg="var(--navy)" id="about-section">
      <Heading color="var(--yellow)">About</Heading>
      <AboutInfo>
        <AboutImg src={KateImg} />
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat,
          quam ac laoreet elementum, libero tellus dignissim nisi, ac blandit
          erat nisi vel sem. Praesent a orci vel nisi luctus eleifend. In in
          urna nec eros accumsan commodo. Aliquam quis ultricies leo, vitae
          accumsan lacus. Pellentesque diam nunc, tincidunt sit amet sem sit
          amet, fermentum ornare velit. In ut massa sed felis consectetur
          condimentum non sit amet massa. Suspendisse accumsan commodo mattis.
          Integer eu egestas quam, at convallis ipsum. Proin tempor consequat
          turpis, vitae egestas metus vulputate iaculis.
        </SectionText>
      </AboutInfo>
    </Section>
  );
};

export default AboutSection;
