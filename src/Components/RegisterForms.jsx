import styled from "styled-components";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

export default function RegisterForms() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);

    if (!v1) {
      setErrMsg(
        "Nome inválido, nome deve começar com uma letra e ter entre 3 - 23 caracteres "
      );
      return;
    }

    if (!v2) {
      setErrMsg(
        "Senha inválida, senha deve conter letra minúscula, letra maiúscula,caracter especial, número e ter entre 8 - 24"
      );
      return;
    }
    if (!v3) {
      setErrMsg("E-mail inválido, insira um e-mail válido");
    }
    try {
      const postObj = { name:user, email, password: pwd , confirmPassword:matchPwd };
      const response = await axios.post(
        "https://deepet-back.herokuapp.com/auth/sign-up",
        postObj
      );
      setUser("");
      setPwd("");
      setMatchPwd("");
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sem resposta do servidor");
      } else if (err.response?.status === 409) {
        setErrMsg("Usuário cadastrado / Email Cadastrado");
      } else {
        setErrMsg("Falha no registro");
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
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        placeholder="Nome"
      />
      <h4
        id="uidnote"
        className={
          userFocus && user && !validName ? "instructions" : "offscreen"
        }
      >
        <FaInfoCircle />
        4 a 24 caracteres.
        <br />
        Deve começar com uma letra.
        <br />
        Letras, números, underline, hífen permitidos.
      </h4>
      <input
        type="email"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        aria-invalid={validEmail ? "false" : "true"}
        aria-describedby="emailnote"
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        placeholder="E-mail"
      />
      <h4
        id="emailnote"
        className={
          emailFocus && email && !validEmail ? "instructions" : "offscreen"
        }
      >
        <FaInfoCircle />
        Deve ser um e-mail válido.
        Deve ter 2 dominios.
        Ex: example@example.com.br
      </h4>
      <input
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
        aria-invalid={validPwd ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
        placeholder="Senha"
      />
      <h4
        id="pwdnote"
        className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
      >
        <FaInfoCircle />
        8 a 24 caracteres.
        <br />
        Deve incluir letras maiúscula e minúscula, um número e um caracter
        especial.
        <br />
      </h4>
      <input
        type="password"
        id="confirm_pwd"
        onChange={(e) => setMatchPwd(e.target.value)}
        value={matchPwd}
        required
        aria-invalid={validMatch ? "false" : "true"}
        aria-describedby="confirmnote"
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
        placeholder="Repita a senha"
      />
      <h4
        id="confirmnote"
        className={matchFocus && !validMatch ? "instructions" : "offscreen"}
      >
        <FaInfoCircle />
        Ambas senhas devem ser iguais.
      </h4>
      <button
        type="submit"
        disabled={!validName || !validPwd || !validMatch ? true : false}
      >
        {"Cadastrar"}
      </button>
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
  h4 {
    margin-bottom: 20px;
    margin-top: -20px;
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
