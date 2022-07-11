import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForms() {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://deepet-back.herokuapp.com/auth/sign-in", {
        email,
        password: pwd,
      });
      const token = response?.data?.token;
      const name = response?.data?.name;
      const time = response?.data?.time;
      const objPost = { name, token, time };
      localStorage.setItem("userData", JSON.stringify(objPost));
      setEmail("");
      setPwd("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sem resposta do servidor");
      }
      if (err.response?.status === 400) {
        setErrMsg("E-mail ou senha incorretos");
      }
      if (err.response?.status === 401) {
        setErrMsg("Não autorizado");
      }
      if (err.response?.status === 404) {
        setErrMsg("Usuário não encontrado");
      } else {
        setErrMsg("Falha no login");
      }
      errRef.current.focus();
    }
  };

  return (
    <Forms onSubmit={handleSubmit}>
      <h2
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </h2>
      <input
        type="email"
        id="email"
        ref={emailRef}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        placeholder="E-mail"
      />

      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        placeholder="Senha"
      />
      <button type="submit">{"Entrar"}</button>
    </Forms>
  );
}

const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;

  input {
    width: 88%;
    height: 64px;
    background: #ffffff;
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
      0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    border-radius: 16px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
    margin-bottom: 24px;
    border: none;
    ::placeholder {
      font-size: 20px;
      line-height: 23px;
      color: #a8afb9;
    }
  }
  button {
    border: none;
    width: 88%;
    height: 64px;
    background-color: #5166b7;
    border-radius: 16px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;
