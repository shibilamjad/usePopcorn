import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
import { device } from "../ui/device";
import { useAuth } from "../context/AuthContext";
import { fadeInVariants } from "../ui/variation";
// import { useMovie } from "../context/MovieContext";

export function SignIn() {
  const [field, setField] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: false,
    password: false,
  });

  // const { isLoading, setQuery } = useMovie();
  const { setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidateSubmit()) {
      setIsLoggedIn(true);
      navigate("/");
    }
    // setQuery("");
  }

  // console.log(isLoading);
  function handleChange(e) {
    setField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    handleBlur(e);
  }

  function isValidateSubmit() {
    const errors = {
      userName: false,
      password: false,
    };

    if (field.userName === "") {
      errors.userName = true;
    }

    if (field.password === "") {
      errors.password = true;
    }

    if (field.password.length < 6) {
      errors.password = true;
    }
    setErrors(errors);
    if (Object.values(errors).some((err) => err === true)) {
      return false;
    }
    return true;
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    let error = false;
    if (name === "userName" && value === "") {
      error = true;
    } else if (name === "password" && value === "") {
      error = true;
    } else if (name === "password" && value.length < 6) {
      error = true;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  return (
    <motion.div
      variants={fadeInVariants("up")}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <LoginContainer>
        <StyledLogin>
          <Stylecontent>
            <div>
              <H1>Sign in</H1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  onChange={handleChange}
                  value={field.userName}
                  onBlur={handleBlur}
                />
                {errors.userName && <Error>Username is required</Error>}
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={field.password}
                  onBlur={handleBlur}
                />
                {errors.password &&
                  (field.password === "" ? (
                    <Error>Password is required</Error>
                  ) : (
                    <Error>Password must be at least 6 characters</Error>
                  ))}
              </div>
              <div>
                <Button type="submit">Sign in</Button>
              </div>
            </form>
            <div>
              <P>Forgot Pasword?</P>
            </div>
            <StyledSign>
              <AlignCenter>
                <div>
                  <p>Not a member? </p>
                </div>
                <div>
                  &nbsp;
                  <NavLink to="/sign-up"> Sign up now.</NavLink>
                </div>
              </AlignCenter>
            </StyledSign>
          </Stylecontent>
        </StyledLogin>
      </LoginContainer>
    </motion.div>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const StyledLogin = styled.div`
  background-color: var(--color-login);
  width: 457px;
  height: 547px;
  border-radius: 4px;

  @media ${device.laptopL} {
    width: 457px;
    height: auto;
  }
  @media ${device.laptop} {
    width: 457px;
    height: auto;
  }
  @media ${device.tablet} {
    width: 357px;
    height: auto;
  }
  @media ${device.mobileL} {
    width: 307px;
    align-items: center;
    height: auto;
  }
  @media ${device.mobileS} {
    width: 227px;
    height: auto;
  }
`;

const Stylecontent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-textColor);
  padding: 48px 60px 0px 60px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 40px;
  gap: 20px;

  @media ${device.laptopL} {
    padding: 48px 60px 10px;
  }
  @media ${device.laptop} {
    padding: 48px 60px 10px;
  }
  @media ${device.tablet} {
    padding: 30px 45px 10px;
  }
  @media ${device.mobileL} {
    padding: 25px 40px 4px;
  }
  @media ${device.mobileS} {
    padding: 14px 20px 4px;
  }
`;
const H1 = styled.h1`
  color: #fff;
  /* color: var(--color-h1); */
  margin-bottom: 29px;
  font-size: 32px;
  @media ${device.laptop} {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media ${device.laptopL} {
    font-size: 25px;

    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    font-size: 17px;
    margin-bottom: 15px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media ${device.mobileS} {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;
const Input = styled.input`
  padding: 10px 15px;
  width: 100%;
  border: transparent;
  color: var(--color-light);
  font-weight: 200;
  background-color: var(--color-input);
  border-radius: 4px;
  margin-bottom: 16px;
  &::placeholder {
    font-size: 15px;
    color: var(--color-inputFont);
  }
  &:focus {
    outline: none;
  }
  @media ${device.laptopL} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
`;

const Error = styled.p`
  font-size: 12px;
  color: var(--color-btnsign);
  font-weight: 300;
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  margin-top: 20px;
  width: 100%;
  border: transparent;
  color: var(--color-light);
  background-color: #3730a3;
  border-radius: 4px;
  &:hover {
    background-color: #4823d8;
    transition: background 0.3s;
  }
  @media ${device.laptopL} {
    font-size: 15px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.laptop} {
    font-size: 14px;

    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 3px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 3px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
`;
const P = styled.p`
  display: flex;
  justify-content: end;
  font-size: 13px;
  margin-top: 14px;
  color: var(--color-textColor);
  font-weight: 400;
`;

const StyledSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 17px;
  margin-top: 80px;
  p {
    color: var(--color-textColor);
    margin-top: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 17px;

    margin-top: 100px;
  }
  @media ${device.laptop} {
    font-size: 17px;
    margin-top: 10px;
  }
  @media ${device.tablet} {
    font-size: 15px;
    margin-top: 10px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
    margin-top: 10px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;

const AlignCenter = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
