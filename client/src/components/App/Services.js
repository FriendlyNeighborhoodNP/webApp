import { Section, Heading, SectionText } from "./SharedStyles";

const ServicesSection = () => {
  return (
    <Section bg="var(--yellow)" id="services-section">
      <Heading color="var(--pink)">Services</Heading>
      <SectionText color="var(--navy)">
        <span style={{ fontWeight: "bold" }}>On-site COVID-19 Testing</span>
        <br />
        We offer Rapid and PCR COVID-19 testing at our community based testing
        events. Choose Rapid Antigen testing for same day results, PCR
        laboratory testing results in approximately 72 hours, or both for no
        additional service charge. All test results will be delivered
        electronically through your patient portal. Please see our schedule for
        available dates and times.
        <br />
        <br />
        Service charge $100
        <br />
        Grand Opening PROMO Rate $75
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>
          In-home / In-Office COVID-19 Testing ONLY (no evaluation/treatment)
        </span>
        <br />
        Friendly Neighborhood NP is happy to come to you to perform COVID-19
        Testing. Choose Rapid Antigen testing for same day results, PCR
        laboratory testing results in approximately 72 hours, or both for no
        additional service charge. All test results will be verbally
        communicated with the patient at the time of service and delivered
        electronically through your patient portal.
        <br />
        <br />
        Service charge $125
        <br />
        Same day service fee $25
        <br />
        Grand Opening PROMO Rate $ 100
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>
          In-home COVID-like Symptom Evaluation and Treatment
        </span>
        <br />
        Are you, or your child, experiencing COVID-like symptoms? Let Friendly
        Neighborhood NP take care of you in the comfort and safety of your own
        home. An experienced nurse practitioner will perform a focused physical
        exam based on your history and symptoms and conduct appropriate
        diagnostic testing. She will develop an individualized treatment plan
        and send ordered prescriptions electronically to a pharmacy of your
        choosing. Whatever is causing your symptoms, Friendly Neighborhood NP
        will provide appropriate testing and evidence-based treatment to get you
        feeling better.
        <br />
        <br />
        Service charge $200
        <br />
        Same day service fee $25 may apply
        <br />
        Additional charge for other diagnostic tests may apply
        <br />
        Grand Opening PROMO Rate $150
      </SectionText>
    </Section>
  );
};

export default ServicesSection;
