import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: 50px;
`;

const UsernameInput = styled.input.attrs({
  type: "text",
  placeholder: "Username",
})`
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const PasswordInput = styled(UsernameInput).attrs({
  type: "password",
  placeholder: "Password",
})``;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  background: var(--pink);
  margin-top: 10px;
`;

const Login = ({ fetchToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleUpdateUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    fetchToken(username, password);
  };

  return (
    <LoginContainer>
      <h2 style={{ color: "var(--grey)" }}>Login</h2>
      <UsernameInput onChange={handleUpdateUsername} />
      <PasswordInput onChange={handleUpdatePassword} />
      <SubmitButton disabled={!username || !password} onClick={handleSubmit}>
        Submit
      </SubmitButton>
    </LoginContainer>
  );
};

export default Login;
