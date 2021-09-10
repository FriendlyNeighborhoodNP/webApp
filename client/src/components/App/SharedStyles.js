import styled from "styled-components";

export const Heading = styled.h2`
  color: ${(props) => (props.color ? props.color : "var(--yellow)")};
  text-align: center;
`;

export const SectionText = styled.div`
  background: ${(props) => (props.bg ? props.bg : "white")};
  border-radius: 6px;
  color: ${(props) => (props.color ? props.color : "var(--grey)")};
  padding: 25px;
`;
export const Section = styled.section`
  background: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? props.color : "var(--grey)")};
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    padding: 20px;
  }
`;
