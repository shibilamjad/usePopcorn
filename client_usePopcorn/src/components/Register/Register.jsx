import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { device } from "../../ui/device";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";

// import { useMovie } from "../context/MovieContext";

export function Register() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { signUp, isLoading } = useRegister();
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      console.log(data);
      await signUp(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LoginContainer>
      <StyledLogin>
        <Stylecontent>
          <div>
            <H1>Sign up</H1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="text"
                placeholder="Username"
                id="userName"
                {...register("userName", {
                  required: "This field is required",
                })}
              />
              {errors.email && <Error>{errors?.userName?.message}</Error>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              {errors.email && <Error>{errors?.email?.message}</Error>}
              <Input
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password needs a minimum of 6 characters",
                  },
                })}
              />
              {errors.password && <Error>{errors?.password?.message}</Error>}
              {/* <Input
                type="password"
                placeholder="password Confirm"
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
              {errors.passwordConfirm && (
                <Error>{errors?.passwordConfirm?.message}</Error>
              )} */}
            </div>
            <div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign up"}
              </Button>
            </div>
          </form>

          <StyledSign>
            <AlignCenter>
              <div>
                <p>Already have a account?</p>
              </div>
              <div>
                &nbsp; <NavLink to="/sign-in"> Sign in now.</NavLink>
              </div>
            </AlignCenter>
          </StyledSign>
        </Stylecontent>
      </StyledLogin>
    </LoginContainer>
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
  background: var(--color-login);
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
  margin-bottom: 10px;
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
  /* color: var(--color-h1); */
`;

const AlignCenter = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
`;
