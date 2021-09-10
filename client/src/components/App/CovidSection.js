import { Section, Heading, SectionText } from "./SharedStyles";

const CovidSection = () => {
  return (
    <Section id="covid-section">
      <Heading color="var(--navy)">COVID-19 Testing Info</Heading>
      <SectionText bg="var(--pink)" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
        lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat, quam
        ac laoreet elementum, libero tellus dignissim nisi, ac blandit erat nisi
        vel sem. Praesent a orci vel nisi luctus eleifend. In in urna nec eros
        accumsan commodo. Aliquam quis ultricies leo, vitae accumsan lacus.
        Pellentesque diam nunc, tincidunt sit amet sem sit amet, fermentum
        ornare velit. In ut massa sed felis consectetur condimentum non sit amet
        massa. Suspendisse accumsan commodo mattis. Integer eu egestas quam, at
        convallis ipsum. Proin tempor consequat turpis, vitae egestas metus
        vulputate iaculis.
      </SectionText>
    </Section>
  );
};

export default CovidSection;
